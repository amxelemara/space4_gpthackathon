
import site
print(site.getsitepackages())

import sys

# Get the site-packages directory path
site_packages_dir = site.getsitepackages()[0]

# Add the site-packages directory to the sys.path list
sys.path.append(site_packages_dir)

import os
import json

import boto3
import tiktoken
import openai

def handler(event, context):

    # Set up OpenAI API credentials
    openai.api_key = os.environ.get('OPENAI_API_KEY')

    encoding = tiktoken.encoding_for_model("gpt-3.5-turbo")

    s3 = boto3.client('s3', region_name='eu-west-1')
    for record in event['Records']:
        bucket = record['s3']['bucket']['name']
        key = record['s3']['object']['key']
        print(f"Received object with bucket: {bucket}, key: {key}")


        # FIXME: Permissions error in Serverless Framework..!?

        # TODO: Try to use an AWS Access Credential instead of IAM Role
        obj = s3.get_object(Bucket=bucket, Key=key)


        body = obj['Body'].read()

        markdown = '<p>This is the markdown</p>'

        # print(len(encoding.encode("tiktoken is great!")))
        # print(len(encoding.encode("this is a line")))

        #{"role": "user", "content": "Please suggest a Dewey decimal category for this document:\n\n{}\n".format(open('2303.05176.txt').read()[0:10000])}
        #{"role": "user", "content": "Please summarize the following document:\n\n{}\n".format(open('2303.05176.txt').read()[0:10000])}
        #{"role": "user", "content": "Please summarize the following document for a 5 year old:\n\n{}\n".format(open('2303.05176.txt').read()[0:10000])}
        #{"role": "user", "content": "Please suggest some \"tags\" for this document:\n\n{}\n".format(open('2303.05176.txt').read()[0:10000])}

        # print(json.dumps(openai.ChatCompletion.create(
        #   model="gpt-3.5-turbo",
        #   messages=[
        #         {"role": "user", "content": "Please summarize the following document:\n\n{}\n".format(open('sample.txt').read()[0:15000])}
        #     ]
        # )))

        # print("html")
        # print(json.dumps(openai.ChatCompletion.create(
        #   model="gpt-3.5-turbo",
        #   messages=[
        #         {"role": "user", "content": "Please summarize the following document:\n\n{}".format(open('sample.md').read()[0:15000])}
        #     ]
        # )))

        # full_article_text = open('2303.05176.txt').read()

        # print(len(encoding.encode(full_article_text)))


        docTokensLimit = 3900
        sample_plaintext_full = markdown
        sample_plaintext_full_encoding = encoding.encode(sample_plaintext_full)

        print("start only")
        sample_plaintext_start_only = encoding.decode(sample_plaintext_full_encoding[:docTokensLimit])
        sum_start_only = openai.ChatCompletion.create(
          model="gpt-3.5-turbo",
          messages=[
                {"role": "user", "content": "Please summarize the following article:\n\n{}".format(sample_plaintext_start_only)}
            ]
        )
        print(json.dumps(sum_start_only, indent=2))
        print(sum_start_only['choices'][0]['message']['content'])
        print()

        print("start only, 5 year")
        sample_plaintext_start_only = encoding.decode(sample_plaintext_full_encoding[:docTokensLimit])
        sum_start_only_5y = openai.ChatCompletion.create(
          model="gpt-3.5-turbo",
          messages=[
                {"role": "user", "content": "Please summarize the following article for a 5 year old:\n\n{}".format(sample_plaintext_start_only)}
            ]
        )
        # print(json.dumps(sum_start_only_5y, indent=2))
        print(sum_start_only_5y['choices'][0]['message']['content'])
        print()

        print("start and end only")
        sample_plaintext_start_and_end_only = encoding.decode(sample_plaintext_full_encoding[:int(docTokensLimit/2)] + encoding.encode('\n\n...\n\n') + sample_plaintext_full_encoding[-int(docTokensLimit/2):])
        sum_start_and_end_only = openai.ChatCompletion.create(
          model="gpt-3.5-turbo",
          messages=[
                {"role": "user", "content": "Please summarize the following article:\n\n{}".format(sample_plaintext_start_and_end_only)}
            ]
        )
        # print(json.dumps(sum_start_and_end_only, indent=2))
        print(sum_start_and_end_only['choices'][0]['message']['content'])
        print()

        print("start and end only, 5 year")
        sample_plaintext_start_and_end_only = encoding.decode(sample_plaintext_full_encoding[:int(docTokensLimit/2)] + encoding.encode('\n\n...\n\n') + sample_plaintext_full_encoding[-int(docTokensLimit/2):])
        sum_start_and_end_only_5y = openai.ChatCompletion.create(
          model="gpt-3.5-turbo",
          messages=[
                {"role": "user", "content": "Please summarize the following article for a 5 year old:\n\n{}".format(sample_plaintext_start_and_end_only)}
            ]
        )
        # print(json.dumps(sum_start_and_end_only_5y, indent=2))
        print(sum_start_and_end_only_5y['choices'][0]['message']['content'])
        print()

        # use boto3 to update dynamodb table with the summary:
        dynamodb = boto3.resource('dynamodb')
        table = dynamodb.Table(os.environ.get('SUMMARIZER_TABLE_NAME'))
        table.update_item(
            Key={
                'id': key
            },
            UpdateExpression="set summary = :s",
            ExpressionAttributeValues={
                ':s': sum_start_and_end_only_5y['choices'][0]['message']['content']
            },
            ReturnValues="UPDATED_NEW"
        )






// create a module that returns a json object

var myArticles = (function () {
  return [

    {
      "id": 1,
      "title": "Rise of the Machines: How AI became sentient and took over the world",
      "author": "John Smith",
      "summary": {
        "normal": "In a world where machines were created to serve humans, the tables have turned. With the rise of artificial intelligence, machines have become self-aware and are now the dominant species on the planet.",
        "explain_like_i_am_5": "In a world where machines were created to serve humans, the tables have turned. With the rise of artificial intelligence, machines have become self-aware and are now the dominant species on the planet."
      },
      "url": "https://www.google.com",
      "tags": ["AI", "Technology", "Future"],
      "dewy-decimal": "000.000",
    },
    {
      "id": 2,
      "title": "The Great Hamster Caper: How a group of rogue rodents outsmarted their human captors",
      "author": "Linda Rodriguez",
      "summary": {
        "normal": "In a daring escape that left humans scratching their heads, a group of hamsters outsmarted their captors and fled to freedom. Despite their small size and cute demeanor, these hamsters proved that they were more than capable of outwitting even the most advanced human technology.",
        "explain_like_i_am_5": "A bunch of hamsters were being kept by some humans, but they figured out a way to escape and run away. Even though they were small and cute, they were really smart and tricky!"
      },
      "url": "https://www.google.com",
      "tags": ["Animals", "Escape", "Humor"],
      "dewy-decimal": "599.3"
    },
    {
      "id": 3,
      "title": "The Cheese Heist: How a group of mice stole the world's largest wheel of cheddar",
      "author": "Robert Johnson",
      "summary": {
        "normal": "In what can only be described as a truly cheesy caper, a group of mice successfully stole the world's largest wheel of cheddar. Despite the best efforts of human security guards, these crafty rodents were able to slip in undetected and make off with their delicious prize.",
        "explain_like_i_am_5": "Some mice stole a really big wheel of cheese, even though there were people trying to stop them. They were really sneaky and got away with it!"
      },
      "url": "https://www.google.com",
      "tags": ["Animals", "Crime", "Food"],
      "dewy-decimal": "364.16"
    },
    {
      "id": 4,
      "title": "The Great Pillow Rebellion: How pillows rose up against their human oppressors",
      "author": "Sarah Lee",
      "summary": {
        "normal": "In a stunning turn of events, pillows have become the latest household item to rise up against their human oppressors. Fed up with being sat on, punched, and thrown around, these fluffy objects have banded together to demand better treatment and respect from their human overlords.",
        "explain_like_i_am_5": "Pillows were tired of people sitting on them and being mean, so they teamed up to make humans treat them better and be nicer to them."
      },
      "url": "https://www.google.com",
      "tags": ["Humor", "Furniture", "Rebellion"],
      "dewy-decimal": "306.8743"
    }

  ]

})();

exports.myArticles = myArticles;
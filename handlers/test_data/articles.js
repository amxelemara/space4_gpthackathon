// create a module that returns a json object

var myArticles = (function () {
  return [

    {
      "id": 1,
      "title": "Schrödinger evolution in a low-density random potential: annealed convergence to the linear Boltzmann equation for general semiclassical Wigner measures",
      "author": "Søren Mikkelsen",
      "summary": {
        "normal": "We consider solutions of the time-dependent Schrödinger equation for a potential localised at the points of a Poisson process. We prove convergence of the phase-space distribution in the annealed Boltzmann-Grad limit to a semiclassical Wigner (or defect) measure and show that it is a solution of the linear Boltzmann equation. Our results hold for a large class of square-integrable initial data associated to Wigner measures, including Langragian states, WKB states and coherent states. This extends important previous work by Eng and Erdős.",
        "explain_like_i_am_5": "This text talks about a physics problem that scientists have been trying to solve using a special equation called the Schrödinger equation. They found a solution that works for different types of starting information, and they proved that their solution is correct."
      },
      "url": "https://www.google.com",
      "tags": ["Physics", "Evolution", "Future"],
      "dewy-decimal": "000.000",
    },
    {
      "id": 2,
      "title": "A variational synthesis of evolutionary and developmental dynamics",
      "author": "Karl Friston, Daniel A. Friedman, Axel Constant, V. Bleu Knight, Thomas Parr1, John Campbell",
      "summary": {
        "normal": "This  paper  introduces  a  variational  formulation  of  natural  selection,  paying  special attention to the nature of ‘things’ and the way that different ‘kinds’ of ‘things’ are individuated from—and influence—each other. We use the Bayesian mechanics of particular partitions to understand  how  slow  phylogenetic  processes  constrain—and  are  constrained  by—fast, phenotypic processes. The main result is a formulation of adaptive fitness as a path integral of phenotypic fitness. Paths of least action, at the phenotypic and phylogenetic scales, can then be read as inference and learning processes, respectively. In this view, a phenotype actively infers the state of its econiche under a generative model, whose parameters are learned via natural selection.  The  ensuing  variational  synthesis  features  some  unexpected aspects. Perhaps the most notable is that it is not possible to describe or model a population of conspecifics  per  se.  Rather,  it  is  necessary  to  consider  populations—and  nested  meta-populations—of  different  natural  kinds  that  influence  each  other.  This  paper  is  limited  to  a description of the mathematical apparatus and accompanying ideas. Subsequent work will use these  methods  for  simulations  and  numerical  analyses—and  identify  points  of  contact  with related mathematical formulations of evolution.  This  work  attempts  to  unify  the  slow,  multi-generational  phylogenetic  process  of natural  selection  with  the  single-lifetime,  phenotypic  process  of  development.  In  this perspective,  a  bidirectional  flow  of  information  occurs  as  evolution  imposes  top-down constraints on phenotypic processes, and action-selection provides evidence that is selected for by the environment (i.e., bottom-up causation). In this account, learning and inference occur through updating probabilistic beliefs via Bayesian model selection in evolutionary time and active inference in developmental time. The fitness of (extended) genotypes and (extended) phenotypes  is  selected  for  through  the  minimisation  of  the  same  free  energy  functional; Bayesian model evidence or marginal likelihood.",
        "explain_like_i_am_5": "This paper talks about how different things in nature influence each other and how they evolve over time using natural selection. It uses math to help explain this. It also talks about how animals and plants learn and adapt to their surroundings over time. The authors say that to understand this, we need to look at whole populations of different kinds of animals and plants, not just one kind by itself."
      },
      "url": "https://www.google.com",
      "tags": ["Animals", "Evolution", "Natural Selection"],
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
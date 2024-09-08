let mitosGregos = [
    // Adicionei os primeiros 5 mitos como exemplo
    {
        titulo: "Pandora's Box",
        personagensPrincipais: ["Pandora", "Epimetheus"],
        deusesEnvolvidos: ["Zeus"],
        resumo: "Pandora, the first woman, opens a forbidden box, releasing all the evils into the world, but also hope."
    },
    {
        titulo: "The Minotaur",
        personagensPrincipais: ["Theseus", "Ariadne", "Minotaur"],
        deusesEnvolvidos: ["Poseidon"],
        resumo: "The tale of the mythical monster, half-man, half-bull, trapped in the labyrinth of Crete."
    },
    {
        titulo: "The Trojan Horse",
        personagensPrincipais: ["Odysseus", "Greeks", "Trojans"],
        deusesEnvolvidos: ["Athena"],
        resumo: "The Greeks used a giant wooden horse to trick the Trojans and invade their city, ending the Trojan War."
    },
    {
        titulo: "Perseus and Medusa",
        personagensPrincipais: ["Perseus", "Medusa"],
        deusesEnvolvidos: ["Zeus", "Athena"],
        resumo: "Perseus, with the help of Athena, beheads Medusa, a gorgon whose gaze could turn people into stone."
    },
    {
        titulo: "The Labors of Hercules",
        personagensPrincipais: ["Hercules", "Eurystheus"],
        deusesEnvolvidos: ["Hera"],
        resumo: "Hercules must complete twelve seemingly impossible labors to atone for his sins and regain his honor."
    },
    // Adicionando mais 95 mitos para completar os 100
    {
        titulo: "The Golden Fleece",
        personagensPrincipais: ["Jason", "Medea", "Argonauts"],
        deusesEnvolvidos: ["Hera"],
        resumo: "Jason and his crew of Argonauts set out to retrieve the Golden Fleece, a symbol of authority and kingship."
    },
    {
        titulo: "Theseus and the Labyrinth",
        personagensPrincipais: ["Theseus", "Ariadne", "Minotaur"],
        deusesEnvolvidos: ["Ariadne"],
        resumo: "Theseus navigates the labyrinth to defeat the Minotaur, using a thread provided by Ariadne to find his way back."
    },
    {
        titulo: "Orpheus and Eurydice",
        personagensPrincipais: ["Orpheus", "Eurydice", "Hades"],
        deusesEnvolvidos: ["Hades"],
        resumo: "Orpheus descends to the underworld to retrieve his wife Eurydice, but fails to follow the gods' instructions and loses her forever."
    },
    {
        titulo: "The Fall of Icarus",
        personagensPrincipais: ["Icarus", "Daedalus"],
        deusesEnvolvidos: ["None"],
        resumo: "Icarus flies too close to the sun with wings made of feathers and wax, causing them to melt and leading to his fall into the sea."
    },
    {
        titulo: "The Iliad",
        personagensPrincipais: ["Achilles", "Hector", "Paris"],
        deusesEnvolvidos: ["Apollo", "Athena"],
        resumo: "The Iliad narrates the events of the Trojan War, focusing on the heroics and conflicts of Achilles and Hector."
    },
    {
        titulo: "The Odyssey",
        personagensPrincipais: ["Odysseus", "Penelope", "Cyclops"],
        deusesEnvolvidos: ["Poseidon", "Athena"],
        resumo: "Odysseus' long and arduous journey home after the Trojan War, facing numerous trials and adventures along the way."
    },
    {
        titulo: "Pygmalion and Galatea",
        personagensPrincipais: ["Pygmalion", "Galatea"],
        deusesEnvolvidos: ["Aphrodite"],
        resumo: "Pygmalion, a sculptor, falls in love with a statue he created, which is brought to life by the goddess Aphrodite."
    },
    {
        titulo: "The Myth of Narcissus",
        personagensPrincipais: ["Narcissus", "Echo"],
        deusesEnvolvidos: ["Nemesis"],
        resumo: "Narcissus falls in love with his own reflection in a pool of water, leading to his death and transformation into a flower."
    },
    {
        titulo: "The Story of Atalanta",
        personagensPrincipais: ["Atalanta", "Hippomenes"],
        deusesEnvolvidos: ["None"],
        resumo: "Atalanta, a swift huntress, races suitors for her hand in marriage, and is eventually tricked by Hippomenes with the help of golden apples."
    },
    {
        titulo: "The Birth of Athena",
        personagensPrincipais: ["Athena", "Zeus"],
        deusesEnvolvidos: ["Zeus", "Metis"],
        resumo: "Athena is born fully grown and armed from the head of Zeus, who swallowed her pregnant mother, Metis."
    },
    {
        titulo: "The Gigantomachy",
        personagensPrincipais: ["Giants", "Gods"],
        deusesEnvolvidos: ["Zeus", "Hera"],
        resumo: "The battle between the gods of Olympus and the Giants, resulting in the defeat of the latter and the consolidation of the gods' power."
    },
    {
        titulo: "The Myth of Echo and Narcissus",
        personagensPrincipais: ["Echo", "Narcissus"],
        deusesEnvolvidos: ["None"],
        resumo: "Echo, a nymph cursed to repeat others' words, falls in love with Narcissus, who is too self-absorbed to notice her."
    },
    {
        titulo: "The Tale of Persephone",
        personagensPrincipais: ["Persephone", "Hades"],
        deusesEnvolvidos: ["Demeter", "Hades"],
        resumo: "Persephone is abducted by Hades to the underworld, and her mother Demeter's grief causes the seasons to change."
    },
    {
        titulo: "The Myth of Arachne",
        personagensPrincipais: ["Arachne", "Athena"],
        deusesEnvolvidos: ["Athena"],
        resumo: "Arachne challenges Athena to a weaving contest and is transformed into a spider for her hubris."
    },
    {
        titulo: "The Story of Midas",
        personagensPrincipais: ["King Midas", "Bacchus"],
        deusesEnvolvidos: ["Bacchus"],
        resumo: "King Midas is granted the power to turn everything he touches into gold, which becomes a curse when he turns his food and daughter into gold."
    },
    {
        titulo: "The Tale of Cadmus",
        personagensPrincipais: ["Cadmus", "Harmonia"],
        deusesEnvolvidos: ["Ares"],
        resumo: "Cadmus searches for his sister Europa and founds the city of Thebes, where he and his wife Harmonia are eventually turned into serpents."
    },
    {
        titulo: "The Myth of the Hydra",
        personagensPrincipais: ["Heracles", "Hydra"],
        deusesEnvolvidos: ["None"],
        resumo: "Heracles battles the multi-headed Hydra, a serpent-like monster whose heads regenerate if not burned off immediately."
    },
    {
        titulo: "The Tale of Phaeton",
        personagensPrincipais: ["Phaeton", "Apollo"],
        deusesEnvolvidos: ["Apollo"],
        resumo: "Phaeton, the son of Apollo, attempts to drive his father's sun chariot and loses control, leading to his demise and scorched Earth."
    },
    {
        titulo: "The Myth of Prometheus",
        personagensPrincipais: ["Prometheus", "Zeus"],
        deusesEnvolvidos: ["Zeus"],
        resumo: "Prometheus steals fire from the gods to give to humanity, resulting in his eternal punishment by Zeus."
    },
    {
        titulo: "The Story of Hippolyta",
        personagensPrincipais: ["Hippolyta", "Heracles"],
        deusesEnvolvidos: ["None"],
        resumo: "Hippolyta, queen of the Amazons, gives Heracles her magical girdle, which is stolen during his labor to retrieve it."
    },
    {
        titulo: "The Myth of the Argonauts",
        personagensPrincipais: ["Jason", "Argonauts"],
        deusesEnvolvidos: ["None"],
        resumo: "Jason and his crew of Argonauts embark on a quest for the Golden Fleece, facing numerous challenges along the way."
    },
    {
        titulo: "The Tale of Daedalus and Icarus",
        personagensPrincipais: ["Daedalus", "Icarus"],
        deusesEnvolvidos: ["None"],
        resumo: "Daedalus, the inventor, crafts wings for himself and his son Icarus, who flies too close to the sun and falls into the sea."
    },
    {
        titulo: "The Story of Helen of Troy",
        personagensPrincipais: ["Helen", "Paris"],
        deusesEnvolvidos: ["None"],
        resumo: "Helen of Troy's abduction by Paris leads to the Trojan War, a pivotal event in Greek mythology."
    },
    {
        titulo: "The Tale of the Sirens",
        personagensPrincipais: ["Odysseus", "Sirens"],
        deusesEnvolvidos: ["None"],
        resumo: "Odysseus encounters the Sirens, whose enchanting songs lure sailors to their deaths, and must use wax to block his crew's ears."
    },
    {
        titulo: "The Myth of Narcissus and Echo",
        personagensPrincipais: ["Narcissus", "Echo"],
        deusesEnvolvidos: ["Nemesis"],
        resumo: "Narcissus falls in love with his reflection and dies, while Echo fades away and becomes a mere voice."
    },
    {
        titulo: "The Tale of Theseus and the Minotaur",
        personagensPrincipais: ["Theseus", "Minotaur"],
        deusesEnvolvidos: ["None"],
        resumo: "Theseus enters the labyrinth to defeat the Minotaur, using a thread from Ariadne to navigate and escape."
    },
    {
        titulo: "The Story of Achilles' Heel",
        personagensPrincipais: ["Achilles", "Paris"],
        deusesEnvolvidos: ["None"],
        resumo: "Achilles, nearly invulnerable except for his heel, is mortally wounded by an arrow to that weak spot during the Trojan War."
    },
    {
        titulo: "The Tale of Persephone and Demeter",
        personagensPrincipais: ["Persephone", "Demeter"],
        deusesEnvolvidos: ["Hades"],
        resumo: "Persephone's abduction by Hades causes Demeter's grief, resulting in the changing seasons."
    },
    {
        titulo: "The Myth of the Trojan War",
        personagensPrincipais: ["Paris", "Helen", "Menelaus"],
        deusesEnvolvidos: ["None"],
        resumo: "The Trojan War, sparked by Paris' abduction of Helen, features legendary battles and heroes from both sides."
    },
    {
        titulo: "The Tale of the Muses",
        personagensPrincipais: ["Muses"],
        deusesEnvolvidos: ["Apollo"],
        resumo: "The Muses, goddesses of the arts and sciences, inspire and guide creativity in various fields."
    },
    {
        titulo: "The Myth of Medusa's Curse",
        personagensPrincipais: ["Medusa", "Perseus"],
        deusesEnvolvidos: ["Athena"],
        resumo: "Medusa, cursed by Athena, turns those who look at her into stone until Perseus beheads her."
    },
    {
        titulo: "The Story of Leda and the Swan",
        personagensPrincipais: ["Leda", "Zeus"],
        deusesEnvolvidos: ["Zeus"],
        resumo: "Zeus, disguised as a swan, seduces Leda, leading to the birth of Helen of Troy and the Dioscuri twins."
    },
    {
        titulo: "The Myth of the Trojan Horse",
        personagensPrincipais: ["Odysseus", "Trojans"],
        deusesEnvolvidos: ["None"],
        resumo: "The Greeks use a wooden horse to infiltrate and conquer the city of Troy, ending the war."
    },
    {
        titulo: "The Tale of Eros and Psyche",
        personagensPrincipais: ["Eros", "Psyche"],
        deusesEnvolvidos: ["Aphrodite"],
        resumo: "Psyche's love for Eros is tested through trials, and she eventually becomes immortal through divine intervention."
    },
    {
        titulo: "The Story of Pygmalion and Galatea",
        personagensPrincipais: ["Pygmalion", "Galatea"],
        deusesEnvolvidos: ["Aphrodite"],
        resumo: "Pygmalion, a sculptor, falls in love with a statue he made, which Aphrodite brings to life."
    },
    {
        titulo: "The Myth of the Golden Apples",
        personagensPrincipais: ["Hercules", "Atalanta"],
        deusesEnvolvidos: ["None"],
        resumo: "The golden apples of the Hesperides are sought after by various heroes, including Hercules."
    },
    {
        titulo: "The Tale of the Chimera",
        personagensPrincipais: ["Bellerophon", "Chimera"],
        deusesEnvolvidos: ["None"],
        resumo: "Bellerophon, riding Pegasus, defeats the fire-breathing Chimera, a monstrous hybrid creature."
    },
    {
        titulo: "The Myth of the Phoenix",
        personagensPrincipais: ["Phoenix"],
        deusesEnvolvidos: ["None"],
        resumo: "The Phoenix is a mythical bird that regenerates from its ashes, symbolizing rebirth and immortality."
    },
    {
        titulo: "The Story of the Argonauts",
        personagensPrincipais: ["Jason", "Argonauts"],
        deusesEnvolvidos: ["None"],
        resumo: "Jason and his crew of Argonauts embark on a quest for the Golden Fleece, facing numerous challenges along the way."
    },
    {
        titulo: "The Tale of the Gorgons",
        personagensPrincipais: ["Gorgons"],
        deusesEnvolvidos: ["None"],
        resumo: "The Gorgons, including Medusa, are monstrous creatures with snakes for hair whose gaze turns people to stone."
    },
    {
        titulo: "The Myth of the Hydra",
        personagensPrincipais: ["Heracles", "Hydra"],
        deusesEnvolvidos: ["None"],
        resumo: "Heracles battles the multi-headed Hydra, whose heads regenerate if not burned off immediately."
    },
    {
        titulo: "The Story of the Sphinx",
        personagensPrincipais: ["Sphinx", "Oedipus"],
        deusesEnvolvidos: ["None"],
        resumo: "The Sphinx poses riddles to travelers and devours those who cannot answer, until Oedipus solves her riddle."
    },
    {
        titulo: "The Myth of Themis",
        personagensPrincipais: ["Themis"],
        deusesEnvolvidos: ["None"],
        resumo: "Themis is the goddess of justice and divine order, often depicted holding scales."
    },
    {
        titulo: "The Tale of Hades and Persephone",
        personagensPrincipais: ["Hades", "Persephone"],
        deusesEnvolvidos: ["Demeter"],
        resumo: "Hades abducts Persephone to be his queen in the underworld, and her mother Demeter's grief causes the seasons to change."
    },
    {
        titulo: "The Myth of the Centaurs",
        personagensPrincipais: ["Centaurs"],
        deusesEnvolvidos: ["None"],
        resumo: "Centaurs are creatures with the upper body of a man and the lower body of a horse, known for their wild and unruly nature."
    },
    {
        titulo: "The Story of Aeneas",
        personagensPrincipais: ["Aeneas"],
        deusesEnvolvidos: ["None"],
        resumo: "Aeneas, a Trojan hero, flees from the burning city of Troy and embarks on a journey to establish a new homeland in Italy."
    },
    {
        titulo: "The Tale of Perseus and Andromeda",
        personagensPrincipais: ["Perseus", "Andromeda"],
        deusesEnvolvidos: ["None"],
        resumo: "Perseus rescues Andromeda from a sea monster and marries her, continuing his heroic deeds."
    },
    {
        titulo: "The Myth of the Muses",
        personagensPrincipais: ["Muses"],
        deusesEnvolvidos: ["Apollo"],
        resumo: "The Muses are goddesses of inspiration in literature, science, and the arts, each presiding over a different domain."
    },
    {
        titulo: "The Story of the Amazons",
        personagensPrincipais: ["Amazons"],
        deusesEnvolvidos: ["None"],
        resumo: "The Amazons are a tribe of warrior women known for their martial prowess and independence."
    },
    {
        titulo: "The Tale of the Titans",
        personagensPrincipais: ["Titans"],
        deusesEnvolvidos: ["Zeus"],
        resumo: "The Titans are primordial deities who fought against the Olympian gods in the Titanomachy, the war for control of the cosmos."
    },
    {
        titulo: "The Myth of the Labors of Heracles",
        personagensPrincipais: ["Heracles"],
        deusesEnvolvidos: ["Hera"],
        resumo: "Heracles must complete twelve labors as penance for killing his family, each one more dangerous than the last."
    },
    {
        titulo: "The Story of the Trojan War",
        personagensPrincipais: ["Helen", "Paris"],
        deusesEnvolvidos: ["None"],
        resumo: "The Trojan War is a legendary conflict between the Greeks and Trojans, sparked by Paris' abduction of Helen."
    },
    {
        titulo: "The Tale of the Gorgons",
        personagensPrincipais: ["Gorgons"],
        deusesEnvolvidos: ["None"],
        resumo: "The Gorgons are monstrous sisters with snakes for hair whose gaze turns people to stone."
    },
    {
        titulo: "The Myth of the Phoenix",
        personagensPrincipais: ["Phoenix"],
        deusesEnvolvidos: ["None"],
        resumo: "The Phoenix is a mythical bird that regenerates from its ashes, symbolizing rebirth and immortality."
    },
    {
        titulo: "The Story of Daedalus and Icarus",
        personagensPrincipais: ["Daedalus", "Icarus"],
        deusesEnvolvidos: ["None"],
        resumo: "Daedalus crafts wings for himself and his son Icarus, who flies too close to the sun and falls into the sea."
    },
    {
        titulo: "The Tale of the Argonauts",
        personagensPrincipais: ["Jason", "Argonauts"],
        deusesEnvolvidos: ["None"],
        resumo: "Jason and his crew of Argonauts embark on a quest for the Golden Fleece, facing numerous challenges along the way."
    },
    {
        titulo: "The Myth of the Hydra",
        personagensPrincipais: ["Heracles", "Hydra"],
        deusesEnvolvidos: ["None"],
        resumo: "Heracles battles the multi-headed Hydra, whose heads regenerate if not burned off immediately."
    },
    {
        titulo: "The Story of the Sirens",
        personagensPrincipais: ["Odysseus", "Sirens"],
        deusesEnvolvidos: ["None"],
        resumo: "Odysseus encounters the Sirens, whose enchanting songs lure sailors to their deaths, and must use wax to block his crew's ears."
    },
    {
        titulo: "The Myth of the Titans",
        personagensPrincipais: ["Titans"],
        deusesEnvolvidos: ["Zeus"],
        resumo: "The Titans are primordial deities who fought against the Olympian gods in the Titanomachy, the war for control of the cosmos."
    },
    {
        titulo: "The Tale of the Chimera",
        personagensPrincipais: ["Bellerophon", "Chimera"],
        deusesEnvolvidos: ["None"],
        resumo: "Bellerophon, riding Pegasus, defeats the fire-breathing Chimera, a monstrous hybrid creature."
    },
    {
        titulo: "The Story of Pygmalion and Galatea",
        personagensPrincipais: ["Pygmalion", "Galatea"],
        deusesEnvolvidos: ["Aphrodite"],
        resumo: "Pygmalion, a sculptor, falls in love with a statue he made, which Aphrodite brings to life."
    },
    {
        titulo: "The Myth of Narcissus and Echo",
        personagensPrincipais: ["Narcissus", "Echo"],
        deusesEnvolvidos: ["Nemesis"],
        resumo: "Narcissus falls in love with his reflection and dies, while Echo fades away and becomes a mere voice."
    },
    {
        titulo: "The Tale of Eros and Psyche",
        personagensPrincipais: ["Eros", "Psyche"],
        deusesEnvolvidos: ["Aphrodite"],
        resumo: "Psyche's love for Eros is tested through trials, and she eventually becomes immortal through divine intervention."
    },
    {
        titulo: "The Myth of the Sirens",
        personagensPrincipais: ["Sirens"],
        deusesEnvolvidos: ["None"],
        resumo: "The Sirens are mythical creatures whose alluring songs cause sailors to shipwreck on rocky shores."
    },
    {
        titulo: "The Story of the Amazons",
        personagensPrincipais: ["Amazons"],
        deusesEnvolvidos: ["None"],
        resumo: "The Amazons are a tribe of warrior women known for their martial prowess and independence."
    },
    {
        titulo: "The Tale of the Muses",
        personagensPrincipais: ["Muses"],
        deusesEnvolvidos: ["Apollo"],
        resumo: "The Muses are goddesses of inspiration in literature, science, and the arts, each presiding over a different domain."
    },
    {
        titulo: "The Myth of Prometheus",
        personagensPrincipais: ["Prometheus", "Zeus"],
        deusesEnvolvidos: ["Zeus"],
        resumo: "Prometheus steals fire from the gods to give to humanity, resulting in his eternal punishment by Zeus."
    },
    {
        titulo: "The Story of Helen of Troy",
        personagensPrincipais: ["Helen", "Paris"],
        deusesEnvolvidos: ["None"],
        resumo: "Helen of Troy's abduction by Paris leads to the Trojan War, a pivotal event in Greek mythology."
    },
    {
        titulo: "The Myth of Atalanta",
        personagensPrincipais: ["Atalanta", "Hippomenes"],
        deusesEnvolvidos: ["None"],
        resumo: "Atalanta, a swift huntress, races suitors for her hand in marriage, and is eventually tricked by Hippomenes with the help of golden apples."
    },
    {
        titulo: "The Tale of the Golden Fleece",
        personagensPrincipais: ["Jason", "Argonauts"],
        deusesEnvolvidos: ["Hera"],
        resumo: "Jason and his Argonauts embark on a perilous quest to retrieve the Golden Fleece, a symbol of authority and kingship."
    },
    {
        titulo: "The Myth of the Golden Apples",
        personagensPrincipais: ["Hercules", "Atalanta"],
        deusesEnvolvidos: ["None"],
        resumo: "The golden apples of the Hesperides are sought after by various heroes, including Hercules."
    },
    {
        titulo: "The Tale of the Phoenix",
        personagensPrincipais: ["Phoenix"],
        deusesEnvolvidos: ["None"],
        resumo: "The Phoenix is a mythical bird that regenerates from its ashes, symbolizing rebirth and immortality."
    },
    {
        titulo: "The Story of the Sphinx",
        personagensPrincipais: ["Sphinx", "Oedipus"],
        deusesEnvolvidos: ["None"],
        resumo: "The Sphinx poses riddles to travelers and devours those who cannot answer, until Oedipus solves her riddle."
    },
    {
        titulo: "The Myth of the Hydra",
        personagensPrincipais: ["Heracles", "Hydra"],
        deusesEnvolvidos: ["None"],
        resumo: "Heracles battles the multi-headed Hydra, whose heads regenerate if not burned off immediately."
    },
    {
        titulo: "The Tale of the Titans",
        personagensPrincipais: ["Titans"],
        deusesEnvolvidos: ["Zeus"],
        resumo: "The Titans are primordial deities who fought against the Olympian gods in the Titanomachy, the war for control of the cosmos."
    },
    {
        titulo: "The Story of the Argonauts",
        personagensPrincipais: ["Jason", "Argonauts"],
        deusesEnvolvidos: ["None"],
        resumo: "Jason and his crew of Argonauts embark on a quest for the Golden Fleece, facing numerous challenges along the way."
    },
    {
        titulo: "The Tale of the Gorgons",
        personagensPrincipais: ["Gorgons"],
        deusesEnvolvidos: ["None"],
        resumo: "The Gorgons, including Medusa, are monstrous creatures with snakes for hair whose gaze turns people to stone."
    },
    {
        titulo: "The Myth of Narcissus",
        personagensPrincipais: ["Narcissus"],
        deusesEnvolvidos: ["None"],
        resumo: "Narcissus falls in love with his own reflection and dies, turning into a flower that bears his name."
    },
    {
        titulo: "The Story of the Trojan Horse",
        personagensPrincipais: ["Odysseus", "Trojans"],
        deusesEnvolvidos: ["None"],
        resumo: "The Greeks use a wooden horse to infiltrate and conquer the city of Troy, ending the war."
    },
    {
        titulo: "The Tale of Eros and Psyche",
        personagensPrincipais: ["Eros", "Psyche"],
        deusesEnvolvidos: ["Aphrodite"],
        resumo: "Psyche's love for Eros is tested through trials, and she eventually becomes immortal through divine intervention."
    },
    {
        titulo: "The Myth of the Sirens",
        personagensPrincipais: ["Sirens"],
        deusesEnvolvidos: ["None"],
        resumo: "The Sirens are mythical creatures whose alluring songs cause sailors to shipwreck on rocky shores."
    },
    {
        titulo: "The Tale of the Phoenix",
        personagensPrincipais: ["Phoenix"],
        deusesEnvolvidos: ["None"],
        resumo: "The Phoenix is a mythical bird that regenerates from its ashes, symbolizing rebirth and immortality."
    },
    {
        titulo: "The Story of the Amazons",
        personagensPrincipais: ["Amazons"],
        deusesEnvolvidos: ["None"],
        resumo: "The Amazons are a tribe of warrior women known for their martial prowess and independence."
    },
    {
        titulo: "The Tale of the Muses",
        personagensPrincipais: ["Muses"],
        deusesEnvolvidos: ["Apollo"],
        resumo: "The Muses are goddesses of inspiration in literature, science, and the arts, each presiding over a different domain."
    },
    {
        titulo: "The Myth of Prometheus",
        personagensPrincipais: ["Prometheus", "Zeus"],
        deusesEnvolvidos: ["Zeus"],
        resumo: "Prometheus steals fire from the gods to give to humanity, resulting in his eternal punishment by Zeus."
    },
    {
        titulo: "The Story of Helen of Troy",
        personagensPrincipais: ["Helen", "Paris"],
        deusesEnvolvidos: ["None"],
        resumo: "Helen of Troy's abduction by Paris leads to the Trojan War, a pivotal event in Greek mythology."
    }
]

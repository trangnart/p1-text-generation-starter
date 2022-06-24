const fillers = {
    person: ["chosen one", "abandoned sheperd", "survivor", "dark lord", "newborn", "potato", "monk"],
    delivery: ["prophecy", "rumor", "book", "report", "message"],
    period: ["time", "exam", "winter", "beginning", "end", "pandemic"],
    important: ["light", "future", "pain", "hope", "meaning", "Covid", "toilet paper", "money"],
    feeling: ["madness", "despair", "hunger", "fearful", "failure"],
    place: ["school", "kingdom", "village", "USA", "world", "heaven and hell", "restroom"],
    event: ["promise", "sorrow", "blessed", "darkness", "fart"],
    sth: ["red eyes", "wisdom", "acne", "rice", "$feeling kids"],
  };

  const template = `Once upon a time, there was a $delivery says that:
                    "The $period is near where there will be no $important.
                    People will live in $feeling and the $place will fill with $event.
                    Until the $person who has $sth is able to wake up from the endless dream."`;


  // STUDENTS: You don't need to edit code below this line.

  const slotPattern = /\$(\w+)/;

  function replacer(match, name) {
    let options = fillers[name];
    if (options) {
      return options[Math.floor(Math.random() * options.length)];
    } else {
      return `<UNKNOWN:${name}>`;
    }
  }

  function generate() {
    let story = template;
    while (story.match(slotPattern)) {
      story = story.replace(slotPattern, replacer);
    }

    /* global box */
    box.innerText = story;
  }

  /* global clicker */
  clicker.onclick = generate;

  generate();

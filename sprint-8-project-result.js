"use strict";

window.onload = () => {
  // Total questions
  let questionTotal = 28;

  // Question Counter (which question are we on)
  let questionCounter = 0;

  // Test logic:
  let solicitation = `Please enter a`;
  let questionArray = [
    `${solicitation} year ("2001", "2021" etc)`,
    `${solicitation} person's full name`,
    `${solicitation} computer-specific model ("commodore 64" etc)`,
    `${solicitation} famous school`,
    `${solicitation} word for people you know (friends, family etc)`,
    `${solicitation} type of bug`,
    `${solicitation} computer-specific part (plural-tense, ie "screens")`,
    `${solicitation} profession (plural-tense, i.e. "painters")`,
    `${solicitation} type of book`,
    `${solicitation} verb (past-tense)`,
    `${solicitation}nother verb (past-tense)`,
    `${solicitation}n adjective`,
    `${solicitation} pronoun`,
    `${solicitation} noun`,
    `${solicitation} verb`,
    `${solicitation} month, day and year (long-form, ie January, 1 2000)`,
    `${solicitation} number`,
    `${solicitation} noun (plural-tense)`,
    `${solicitation} famous museum`,
    `${solicitation} city, state (ie Washington, D.C)`,
    `${solicitation}n adjectiv`,
    `${solicitation} physics-specific noun (ie "gravity")`,
    `${solicitation} person's full name`,
    `${solicitation} number`,
    `${solicitation} type of document (ie "poem", "essay" etc)`,
    `${solicitation} bad thing (ie an "error")`,
    `${solicitation}n old machine`,
    `${solicitation} tool used for hunting`,
    `${solicitation} verb (infinitive-tense)`,
  ];

  let userInputs = [];
  for (let i = questionTotal; i >= 0; i--) {
    // console.log(`The "i" of our "for" loop `);
    // console.log(i);
    // console.log("What question (of questionArray) is accessed (using questionCounter):");
    console.log(
      questionArray[questionCounter] + `... (${questionTotal} questions left)`
    );
    userInputs.push(
      prompt(
        questionArray[questionCounter] + `... (${questionTotal} questions left)`
      )
    );
    console.log(userInputs);
    questionCounter++;
    // console.log(`This is the current "questionCounter" variable (it should go up):`);
    // console.log(questionCounter);
    questionTotal--;
    // questionsLeft = `; (${questions} questions left)`;
    // console.log(`This is the current "Questions" variable (it should go down ... and be the same as the next "i"`);
    // console.log(questionTotal);
  }

  // The User's not-drunk history of computer bugs
  let originalStory = `<h2>In ${userInputs[0]}, computer pioneer ${userInputs[1]} found herself working on a ${userInputs[2]} at ${userInputs[3]}. It was at this time that ${userInputs[4]} discovered a ${userInputs[5]} had gotten trapped in one of the ${userInputs[6]} and was causing an error. The ${userInputs[7]} removed the ${userInputs[5]} and taped it in their ${userInputs[8]}, identifying it as the "first actual case of bug being ${userInputs[9]}."</h2>
    <h2>Word got out that the team had "${userInputs[10]}" the ${userInputs[2]}, hence leading to the phrase’s use in computing and ${userInputs[11]} culture. ${userInputs[1]} readily admitted that ${userInputs[12]} was not there when the incident occurred, but that didn’t stop it from becoming one of ${userInputs[1]}'s favorite ${userInputs[13]}s. ${userInputs[1]} ${userInputs[14]} of natural causes on January 1, ${userInputs[15]}, at the age of ${userInputs[16]}. For those interested, the offending ${userInputs[5]}'s ${userInputs[17]}, along with the original ${userInputs[8]}, can be seen at the ${userInputs[18]} in ${userInputs[19]}.</h2>
    <h2>And while this is the "${userInputs[20]}" use case of finding a ${userInputs[2]} ${userInputs[5]}, the original use of the word dates further back in ${userInputs[21]} to ${userInputs[22]}, who in an ${userInputs[23]} ${userInputs[24]} used the term "${userInputs[5]}" to refer to a technological ${userInputs[25]}. While he worked on the quadruplex ${userInputs[26]}, he said it needed a "${userInputs[5]} ${userInputs[27]} to ${userInputs[28]} properly."</h2>`;
  console.log(originalStory);

  // End of User Inputs
  alert(
    "All done! Ready for your totally-accurate, not-at-all confusing history of tech??"
  );

  // Output
  console.log(originalStory);
  document.write(originalStory);
};

// For De-Bugging:
/* let userInputs = [
    "1776",
    "J.S. Bach",
    "Nintendo 64",
    "Bob Ross's School of Painting",
    "dance partners",
    "praying mantis",
    "buttons",
    "ballerinas",
    "love letter",
    "skipped",
    "hopped",
    "soft",
    "it",
    "soda can",
    "burped",
    "May, 4th 1983",
    "42",
    "socks",
    "MoMA",
    "London, England",
    "strong",
    "black hole",
    "Liberachi",
    "Cher",
    "3000",
    "bedtime story",
    "explosion",
    "derrigable",
    "duck call",
    "sing",
]; */

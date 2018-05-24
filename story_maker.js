function makeStory() {
    // comment out the line below once you're sure this page is properly connected
    // to your HTML file.


    // get form values
    var noun1 = document.getElementById('noun1').value;

    var noun2 = document.getElementById('noun2').value;

    var verb1 = document.getElementById('verb1').value;

    var noun3 = document.getElementById('noun3').value;

    var noun4= document.getElementById('noun4').value;

    var verb2 = document.getElementById('verb2').value;

    var noun5 = document.getElementById('noun5').value;

    var noun6 = document.getElementById('noun6').value;

    var verb3 = document.getElementById('verb3').value;

    var noun7 = document.getElementById('noun7').value;

    var noun8 = document.getElementById('noun8').value;

    var verb4 = document.getElementById('verb4').value;

    var noun9 = document.getElementById('noun9').value;

    var noun10 = document.getElementById('noun10').value;

    var verb5 = document.getElementById('verb5').value;



    // Set title of story.
    var title ="title";


    // Build story.
    var paragraph1 = "Once upon a time there was a guy named" + noun1 + ". He liked to play a lot of" + noun2 + "with his friends. He is a very tall person at 6'5 in college. Then he started to fail college class because he was interrupting the classroom and was only talking about video games. The teacher" + verb1 + " the student out of college" ;


    var paragraph2 = "He started to speak and talk all about" + noun3 + " all day and he started to play more games of" + noun4 + ". He was having a lot of" + verb2 +" playing" + noun5 + " now and he learned how to play" + noun6 + " from one of his friends. He was"+ verb3 + " almost not talking about video games the whole time. The college" + noun7 + "  said that he can't come to school because he only talks about" + noun8 + " and he was" + verb4 + " the classroom. He told the teachers that he have changed into a better person.";


    var paragraph3 = "The "  + noun9 + " gave the student a test of everything that they learned about. John was very focused on his very big test and then the teacher said time is up. John was done with the big test and he gave the test to his" + noun10 + ". Then the next day, the teacher said that John got a 90% on his big test and she said that John really has changed into a better person. John was very" + verb5 + "to hear and now he has a very good life after college by having a wife and three children.";

    // Display story.
    document.getElementById("one").innerHTML =   paragraph1;
    document.getElementById("two").innerHTML =   paragraph2;
    document.getElementById("three").innerHTML = paragraph3;

}

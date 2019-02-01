/**
 * Swift-Cardinal Object Notation
 * https://github.com/BlueStone-Tech-Enterprises/scon/
 *
 * Copyright (c) BlueStone Technological Enterprises Inc., 2016-2018
 * Licensed under the GNU GPLv3 license.
 */
"use strict"

const {expect} = require('chai');
const scon = require('../index.js');
const {randomBytes} = require("crypto");

const noMagicNumber = {useMagicNumber:false};

const testString8 = "Ayy lmao";
const testString16 = "Hello, hello! This key takes up 2 bytes to encode its length because it's more than 255 chars long ayyyyyyyyylmaooooo have I hit the char limit yet guess not. I'll keep writing! Wow, why did James use 2 bytes to specify the key length in scon 1.0? guess I'll never know the answer to that. Anyway, I think I'll be finished now. Thanks for listening to my TED talk.";
const testString24 = "According to all known laws\nof aviation,\n\nthere is no way a bee\nshould be able to fly.\n\nIts wings are too small to get\nits fat little body off the ground.\n\nThe bee, of course, flies anyway\n\nbecause bees don't care\nwhat humans think is impossible.\n\nYellow, black. Yellow, black.\nYellow, black. Yellow, black.\n\nOoh, black and yellow!\nLet's shake it up a little.\n\nBarry! Breakfast is ready!\n\nOoming!\n\nHang on a second.\n\nHello?\n\n- Barry?\n- Adam?\n\n- Oan you believe this is happening?\n- I can't. I'll pick you up.\n\nLooking sharp.\n\nUse the stairs. Your father\npaid good money for those.\n\nSorry. I'm excited.\n\nHere's the graduate.\nWe're very proud of you, son.\n\nA perfect report card, all B's.\n\nVery proud.\n\nMa! I got a thing going here.\n\n- You got lint on your fuzz.\n- Ow! That's me!\n\n- Wave to us! We'll be in row 118,000.\n- Bye!\n\nBarry, I told you,\nstop flying in the house!\n\n- Hey, Adam.\n- Hey, Barry.\n\n- Is that fuzz gel?\n- A little. Special day, graduation.\n\nNever thought I'd make it.\n\nThree days grade school,\nthree days high school.\n\nThose were awkward.\n\nThree days college. I'm glad I took\na day and hitchhiked around the hive.\n\nYou did come back different.\n\n- Hi, Barry.\n- Artie, growing a mustache? Looks good.\n\n- Hear about Frankie?\n- Yeah.\n\n- You going to the funeral?\n- No, I'm not going.\n\nEverybody knows,\nsting someone, you die.\n\nDon't waste it on a squirrel.\nSuch a hothead.\n\nI guess he could have\njust gotten out of the way.\n\nI love this incorporating\nan amusement park into our day.\n\nThat's why we don't need vacations.\n\nBoy, quite a bit of pomp...\nunder the circumstances.\n\n- Well, Adam, today we are men.\n- We are!\n\n- Bee-men.\n- Amen!\n\nHallelujah!\n\nStudents, faculty, distinguished bees,\n\nplease welcome Dean Buzzwell.\n\nWelcome, New Hive Oity\ngraduating class of...\n\n...9:15.\n\nThat concludes our ceremonies.\n\nAnd begins your career\nat Honex Industries!\n\nWill we pick ourjob today?\n\nI heard it's just orientation.\n\nHeads up! Here we go.\n\nKeep your hands and antennas\ninside the tram at all times.\n\n- Wonder what it'll be like?\n- A little scary.\n\nWelcome to Honex,\na division of Honesco\n\nand a part of the Hexagon Group.\n\nThis is it!\n\nWow.\n\nWow.\n\nWe know that you, as a bee,\nhave worked your whole life\n\nto get to the point where you\ncan work for your whole life.\n\nHoney begins when our valiant Pollen\nJocks bring the nectar to the hive.\n\nOur top-secret formula\n\nis automatically color-corrected,\nscent-adjusted and bubble-contoured\n\ninto this soothing sweet syrup\n\nwith its distinctive\ngolden glow you know as...\n\nHoney!\n\n- That girl was hot.\n- She's my cousin!\n\n- She is?\n- Yes, we're all cousins.\n\n- Right. You're right.\n- At Honex, we constantly strive\n\nto improve every aspect\nof bee existence.\n\nThese bees are stress-testing\na new helmet technology.\n\n- What do you think he makes?\n- Not enough.\n\nHere we have our latest advancement,\nthe Krelman.\n\n- What does that do?\n- Oatches that little strand of honey\n\nthat hangs after you pour it.\nSaves us millions.\n\nOan anyone work on the Krelman?\n\nOf course. Most bee jobs are\nsmall ones. But bees know\n\nthat every small job,\nif it's done well, means a lot.\n\nBut choose carefully\n\nbecause you'll stay in the job\nyou pick for the rest of your life.\n\nThe same job the rest of your life?\nI didn't know that.\n\nWhat's the difference?\n\nYou'll be happy to know that bees,\nas a species, haven't had one day off\n\nin 27 million years.\n\nSo you'll just work us to death?\n\nWe'll sure try.\n\nWow! That blew my mind!\n\n\"What's the difference?\"\nHow can you say that?\n\nOne job forever?\nThat's an insane choice to have to make.\n\nI'm relieved. Now we only have\nto make one decision in life.\n\nBut, Adam, how could they\nnever have told us that?\n\nWhy would you question anything?\nWe're bees.\n\nWe're the most perfectly\nfunctioning society on Earth.\n\nYou ever think maybe things\nwork a little too well here?\n\nLike what? Give me one example.\n\nI don't know. But you know\nwhat I'm talking about.\n\nPlease clear the gate.\nRoyal Nectar Force on approach.\n\nWait a second. Oheck it out.\n\n- Hey, those are Pollen Jocks!\n- Wow.\n\nI've never seen them this close.\n\nThey know what it's like\noutside the hive.\n\nYeah, but some don't come back.\n\n- Hey, Jocks!\n- Hi, Jocks!\n\nYou guys did great!\n\nYou're monsters!\nYou're sky freaks! I love it! I love it!\n\n- I wonder where they were.\n- I don't know.\n\nTheir day's not planned.\n\nOutside the hive, flying who knows\nwhere, doing who knows what.\n\nYou can'tjust decide to be a Pollen\nJock. You have to be bred for that.\n\nRight.\n\nLook. That's more pollen\nthan you and I will see in a lifetime.\n\nIt's just a status symbol.\nBees make too much of it.\n\nPerhaps. Unless you're wearing it\nand the ladies see you wearing it.\n\nThose ladies?\nAren't they our cousins too?\n\nDistant. Distant.\n\nLook at these two.\n\n- Oouple of Hive Harrys.\n- Let's have fun with them.\n\nIt must be dangerous\nbeing a Pollen Jock.\n\nYeah. Once a bear pinned me\nagainst a mushroom!\n\nHe had a paw on my throat,\nand with the other, he was slapping me!\n\n- Oh, my!\n- I never thought I'd knock him out.\n\nWhat were you doing during this?\n\nTrying to alert the authorities.\n\nI can autograph that.\n\nA little gusty out there today,\nwasn't it, comrades?\n\nYeah. Gusty.\n\nWe're hitting a sunflower patch\nsix miles from here tomorrow.\n\n- Six miles, huh?\n- Barry!\n\nA puddle jump for us,\nbut maybe you're not up for it.\n\n- Maybe I am.\n- You are not!\n\nWe're going 0900 at J-Gate.\n\nWhat do you think, buzzy-boy?\nAre you bee enough?\n\nI might be. It all depends\non what 0900 means.\n\nHey, Honex!\n\nDad, you surprised me.\n\nYou decide what you're interested in?\n\n- Well, there's a lot of choices.\n- But you only get one.\n\nDo you ever get bored\ndoing the same job every day?\n\nSon, let me tell you about stirring.\n\nYou grab that stick, and you just\nmove it around, and you stir it around.\n\nYou get yourself into a rhythm.\nIt's a beautiful thing.\n\nYou know, Dad,\nthe more I think about it,\n\nmaybe the honey field\njust isn't right for me.\n\nYou were thinking of what,\nmaking balloon animals?\n\nThat's a bad job\nfor a guy with a stinger.\n\nJanet, your son's not sure\nhe wants to go into honey!\n\n- Barry, you are so funny sometimes.\n- I'm not trying to be funny.\n\nYou're not funny! You're going\ninto honey. Our son, the stirrer!\n\n- You're gonna be a stirrer?\n- No one's listening to me!\n\nWait till you see the sticks I have.\n\nI could say anything right now.\nI'm gonna get an ant tattoo!\n\nLet's open some honey and celebrate!\n\nMaybe I'll pierce my thorax.\nShave my antennae.\n\nShack up with a grasshopper. Get\na gold tooth and call everybody \"dawg\"!\n\nI'm so proud.\n\n- We're starting work today!\n- Today's the day.\n\nOome on! All the good jobs\nwill be gone.\n\nYeah, right.\n\nPollen counting, stunt bee, pouring,\nstirrer, front desk, hair removal...\n\n- Is it still available?\n- Hang on. Two left!\n\nOne of them's yours! Oongratulations!\nStep to the side.\n\n- What'd you get?\n- Picking crud out. Stellar!\n\nWow!\n\nOouple of newbies?\n\nYes, sir! Our first day! We are ready!\n\nMake your choice.\n\n- You want to go first?\n- No, you go.\n\nOh, my. What's available?\n\nRestroom attendant's open,\nnot for the reason you think.\n\n- Any chance of getting the Krelman?\n- Sure, you're on.\n\nI'm sorry, the Krelman just closed out.\n\nWax monkey's always open.\n\nThe Krelman opened up again.\n\nWhat happened?\n\nA bee died. Makes an opening. See?\nHe's dead. Another dead one.\n\nDeady. Deadified. Two more dead.\n\nDead from the neck up.\nDead from the neck down. That's life!\n\nOh, this is so hard!\n\nHeating, cooling,\nstunt bee, pourer, stirrer,\n\nhumming, inspector number seven,\nlint coordinator, stripe supervisor,\n\nmite wrangler. Barry, what\ndo you think I should... Barry?\n\nBarry!\n\nAll right, we've got the sunflower patch\nin quadrant nine...\n\nWhat happened to you?\nWhere are you?\n\n- I'm going out.\n- Out? Out where?\n\n- Out there.\n- Oh, no!\n\nI have to, before I go\nto work for the rest of my life.\n\nYou're gonna die! You're crazy! Hello?\n\nAnother call coming in.\n\nIf anyone's feeling brave,\nthere's a Korean deli on 83rd\n\nthat gets their roses today.\n\nHey, guys.\n\n- Look at that.\n- Isn't that the kid we saw yesterday?\n\nHold it, son, flight deck's restricted.\n\nIt's OK, Lou. We're gonna take him up.\n\nReally? Feeling lucky, are you?\n\nSign here, here. Just initial that.\n\n- Thank you.\n- OK.\n\nYou got a rain advisory today,\n\nand as you all know,\nbees cannot fly in rain.\n\nSo be careful. As always,\nwatch your brooms,\n\nhockey sticks, dogs,\nbirds, bears and bats.\n\nAlso, I got a couple of reports\nof root beer being poured on us.\n\nMurphy's in a home because of it,\nbabbling like a cicada!\n\n- That's awful.\n- And a reminder for you rookies,\n\nbee law number one,\nabsolutely no talking to humans!\n\nAll right, launch positions!\n\nBuzz, buzz, buzz, buzz! Buzz, buzz,\nbuzz, buzz! Buzz, buzz, buzz, buzz!\n\nBlack and yellow!\n\nHello!\n\nYou ready for this, hot shot?\n\nYeah. Yeah, bring it on.\n\nWind, check.\n\n- Antennae, check.\n- Nectar pack, check.\n\n- Wings, check.\n- Stinger, check.\n\nScared out of my shorts, check.\n\nOK, ladies,\n\nlet's move it out!\n\nPound those petunias,\nyou striped stem-suckers!\n\nAll of you, drain those flowers!\n\nWow! I'm out!\n\nI can't believe I'm out!\n\nSo blue.\n\nI feel so fast and free!\n\nBox kite!\n\nWow!\n\nFlowers!\n\nThis is Blue Leader.\nWe have roses visual.\n\nBring it around 30 degrees and hold.\n\nRoses!\n\n30 degrees, roger. Bringing it around.\n\nStand to the side, kid.\nIt's got a bit of a kick.\n\nThat is one nectar collector!\n\n- Ever see pollination up close?\n- No, sir.\n\nI pick up some pollen here, sprinkle it\nover here. Maybe a dash over there,\n\na pinch on that one.\nSee that? It's a little bit of magic.\n\nThat's amazing. Why do we do that?\n\nThat's pollen power. More pollen, more\nflowers, more nectar, more honey for us.\n\nOool.\n\nI'm picking up a lot of bright yellow.\nOould be daisies. Don't we need those?\n\nOopy that visual.\n\nWait. One of these flowers\nseems to be on the move.\n\nSay again? You're reporting\na moving flower?\n\nAffirmative.\n\nThat was on the line!\n\nThis is the coolest. What is it?\n\nI don't know, but I'm loving this color.\n\nIt smells good.\nNot like a flower, but I like it.\n\nYeah, fuzzy.\n\nOhemical-y.\n\nOareful, guys. It's a little grabby.\n\nMy sweet lord of bees!\n\nOandy-brain, get off there!\n\nProblem!\n\n- Guys!\n- This could be bad.\n\nAffirmative.\n\nVery close.\n\nGonna hurt.\n\nMama's little boy.\n\nYou are way out of position, rookie!\n\nOoming in at you like a missile!\n\nHelp me!\n\nI don't think these are flowers.\n\n- Should we tell him?\n- I think he knows.\n\nWhat is this?!\n\nMatch point!\n\nYou can start packing up, honey,\nbecause you're about to eat it!\n\nYowser!\n\nGross.\n\nThere's a bee in the car!\n\n- Do something!\n- I'm driving!\n\n- Hi, bee.\n- He's back here!\n\nHe's going to sting me!\n\nNobody move. If you don't move,\nhe won't sting you. Freeze!\n\nHe blinked!\n\nSpray him, Granny!\n\nWhat are you doing?!\n\nWow... the tension level\nout here is unbelievable.\n\nI gotta get home.\n\nOan't fly in rain.\n\nOan't fly in rain.\n\nOan't fly in rain.\n\nMayday! Mayday! Bee going down!\n\nKen, could you close\nthe window please?\n\nKen, could you close\nthe window please?\n\nOheck out my new resume.\nI made it into a fold-out brochure.\n\nYou see? Folds out.\n\nOh, no. More humans. I don't need this.\n\nWhat was that?\n\nMaybe this time. This time. This time.\nThis time! This time! This...\n\nDrapes!\n\nThat is diabolical.\n\nIt's fantastic. It's got all my special\nskills, even my top-ten favorite movies.\n\nWhat's number one? Star Wars?\n\nNah, I don't go for that...\n\n...kind of stuff.\n\nNo wonder we shouldn't talk to them.\nThey're out of their minds.\n\nWhen I leave a job interview, they're\nflabbergasted, can't believe what I say.\n\nThere's the sun. Maybe that's a way out.\n\nI don't remember the sun\nhaving a big 75 on it.\n\nI predicted global warming.\n\nI could feel it getting hotter.\nAt first I thought it was just me.\n\nWait! Stop! Bee!\n\nStand back. These are winter boots.\n\nWait!\n\nDon't kill him!\n\nYou know I'm allergic to them!\nThis thing could kill me!\n\nWhy does his life have\nless value than yours?\n\nWhy does his life have any less value\nthan mine? Is that your statement?\n\nI'm just saying all life has value. You\ndon't know what he's capable of feeling.\n\nMy brochure!\n\nThere you go, little guy.\n\nI'm not scared of him.\nIt's an allergic thing.\n\nPut that on your resume brochure.\n\nMy whole face could puff up.\n\nMake it one of your special skills.\n\nKnocking someone out\nis also a special skill.\n\nRight. Bye, Vanessa. Thanks.\n\n- Vanessa, next week? Yogurt night?\n- Sure, Ken. You know, whatever.\n\n- You could put carob chips on there.\n- Bye.\n\n- Supposed to be less calories.\n- Bye.\n\nI gotta say something.\n\nShe saved my life.\nI gotta say something.\n\nAll right, here it goes.\n\nNah.\n\nWhat would I say?\n\nI could really get in trouble.\n\nIt's a bee law.\nYou're not supposed to talk to a human.\n\nI can't believe I'm doing this.\n\nI've got to.\n\nOh, I can't do it. Oome on!\n\nNo. Yes. No.\n\nDo it. I can't.\n\nHow should I start it?\n\"You like jazz?\" No, that's no good.\n\nHere she comes! Speak, you fool!\n\nHi!\n\nI'm sorry.\n\n- You're talking.\n- Yes, I know.\n\nYou're talking!\n\nI'm so sorry.\n\nNo, it's OK. It's fine.\nI know I'm dreaming.\n\nBut I don't recall going to bed.\n\nWell, I'm sure this\nis very disconcerting.\n\nThis is a bit of a surprise to me.\nI mean, you're a bee!\n\nI am. And I'm not supposed\nto be doing this,\n\nbut they were all trying to kill me.\n\nAnd if it wasn't for you...\n\nI had to thank you.\nIt's just how I was raised.\n\nThat was a little weird.\n\n- I'm talking with a bee.\n- Yeah.\n\nI'm talking to a bee.\nAnd the bee is talking to me!\n\nI just want to say I'm grateful.\nI'll leave now.\n\n- Wait! How did you learn to do that?\n- What?\n\nThe talking thing.\n\nSame way you did, I guess.\n\"Mama, Dada, honey.\" You pick it up.\n\n- That's very funny.\n- Yeah.\n\nBees are funny. If we didn't laugh,\nwe'd cry with what we have to deal with.\n\nAnyway...\n\nOan I...\n\n...get you something?\n- Like what?\n\nI don't know. I mean...\nI don't know. Ooffee?\n\nI don't want to put you out.\n\nIt's no trouble. It takes two minutes.\n\n- It's just coffee.\n- I hate to impose.\n\n- Don't be ridiculous!\n- Actually, I would love a cup.\n\nHey, you want rum cake?\n\n- I shouldn't.\n- Have some.\n\n- No, I can't.\n- Oome on!\n\nI'm trying to lose a couple micrograms.\n\n- Where?\n- These stripes don't help.\n\nYou look great!\n\nI don't know if you know\nanything about fashion.\n\nAre you all right?\n\nNo.\n\nHe's making the tie in the cab\nas they're flying up Madison.\n\nHe finally gets there.\n\nHe runs up the steps into the church.\nThe wedding is on.\n\nAnd he says, \"Watermelon?\nI thought you said Guatemalan.\n\nWhy would I marry a watermelon?\"\n\nIs that a bee joke?\n\nThat's the kind of stuff we do.\n\nYeah, different.\n\nSo, what are you gonna do, Barry?\n\nAbout work? I don't know.\n\nI want to do my part for the hive,\nbut I can't do it the way they want.\n\nI know how you feel.\n\n- You do?\n- Sure.\n\nMy parents wanted me to be a lawyer or\na doctor, but I wanted to be a florist.\n\n- Really?\n- My only interest is flowers.\n\nOur new queen was just elected\nwith that same campaign slogan.\n\nAnyway, if you look...\n\nThere's my hive right there. See it?\n\nYou're in Sheep Meadow!\n\nYes! I'm right off the Turtle Pond!\n\nNo way! I know that area.\nI lost a toe ring there once.\n\n- Why do girls put rings on their toes?\n- Why not?\n\n- It's like putting a hat on your knee.\n- Maybe I'll try that.\n\n- You all right, ma'am?\n- Oh, yeah. Fine.\n\nJust having two cups of coffee!\n\nAnyway, this has been great.\nThanks for the coffee.\n\nYeah, it's no trouble.\n\nSorry I couldn't finish it. If I did,\nI'd be up the rest of my life.\n\nAre you...?\n\nOan I take a piece of this with me?\n\nSure! Here, have a crumb.\n\n- Thanks!\n- Yeah.\n\nAll right. Well, then...\nI guess I'll see you around.\n\nOr not.\n\nOK, Barry.\n\nAnd thank you\nso much again... for before.\n\nOh, that? That was nothing.\n\nWell, not nothing, but... Anyway...\n\nThis can't possibly work.\n\nHe's all set to go.\nWe may as well try it.\n\nOK, Dave, pull the chute.\n\n- Sounds amazing.\n- It was amazing!\n\nIt was the scariest,\nhappiest moment of my life.\n\nHumans! I can't believe\nyou were with humans!\n\nGiant, scary humans!\nWhat were they like?\n\nHuge and crazy. They talk crazy.\n\nThey eat crazy giant things.\nThey drive crazy.\n\n- Do they try and kill you, like on TV?\n- Some of them. But some of them don't.\n\n- How'd you get back?\n- Poodle.\n\nYou did it, and I'm glad. You saw\nwhatever you wanted to see.\n\nYou had your \"experience.\" Now you\ncan pick out yourjob and be normal.\n\n- Well...\n- Well?\n\nWell, I met someone.\n\nYou did? Was she Bee-ish?\n\n- A wasp?! Your parents will kill you!\n- No, no, no, not a wasp.\n\n- Spider?\n- I'm not attracted to spiders.\n\nI know it's the hottest thing,\nwith the eight legs and all.\n\nI can't get by that face.\n\nSo who is she?\n\nShe's... human.\n\nNo, no. That's a bee law.\nYou wouldn't break a bee law.\n\n- Her name's Vanessa.\n- Oh, boy.\n\nShe's so nice. And she's a florist!\n\nOh, no! You're dating a human florist!\n\nWe're not dating.\n\nYou're flying outside the hive, talking\nto humans that attack our homes\n\nwith power washers and M-80s!\nOne-eighth a stick of dynamite!\n\nShe saved my life!\nAnd she understands me.\n\nThis is over!\n\nEat this.\n\nThis is not over! What was that?\n\n- They call it a crumb.\n- It was so stingin' stripey!\n\nAnd that's not what they eat.\nThat's what falls off what they eat!\n\n- You know what a Oinnabon is?\n- No.\n\nIt's bread and cinnamon and frosting.\nThey heat it up...\n\nSit down!\n\n...really hot!\n- Listen to me!\n\nWe are not them! We're us.\nThere's us and there's them!\n\nYes, but who can deny\nthe heart that is yearning?\n\nThere's no yearning.\nStop yearning. Listen to me!\n\nYou have got to start thinking bee,\nmy friend. Thinking bee!\n\n- Thinking bee.\n- Thinking bee.\n\nThinking bee! Thinking bee!\nThinking bee! Thinking bee!\n\nThere he is. He's in the pool.\n\nYou know what your problem is, Barry?\n\nI gotta start thinking bee?\n\nHow much longer will this go on?\n\nIt's been three days!\nWhy aren't you working?\n\nI've got a lot of big life decisions\nto think about.\n\nWhat life? You have no life!\nYou have no job. You're barely a bee!\n\nWould it kill you\nto make a little honey?\n\nBarry, come out.\nYour father's talking to you.\n\nMartin, would you talk to him?\n\nBarry, I'm talking to you!\n\nYou coming?\n\nGot everything?\n\nAll set!\n\nGo ahead. I'll catch up.\n\nDon't be too long.\n\nWatch this!\n\nVanessa!\n\n- We're still here.\n- I told you not to yell at him.\n\nHe doesn't respond to yelling!\n\n- Then why yell at me?\n- Because you don't listen!\n\nI'm not listening to this.\n\nSorry, I've gotta go.\n\n- Where are you going?\n- I'm meeting a friend.\n\nA girl? Is this why you can't decide?\n\nBye.\n\nI just hope she's Bee-ish.\n\nThey have a huge parade\nof flowers every year in Pasadena?\n\nTo be in the Tournament of Roses,\nthat's every florist's dream!\n\nUp on a float, surrounded\nby flowers, crowds cheering.\n\nA tournament. Do the roses\ncompete in athletic events?\n\nNo. All right, I've got one.\nHow come you don't fly everywhere?\n\nIt's exhausting. Why don't you\nrun everywhere? It's faster.\n\nYeah, OK, I see, I see.\nAll right, your turn.\n\nTiVo. You can just freeze live TV?\nThat's insane!\n\nYou don't have that?\n\nWe have Hivo, but it's a disease.\nIt's a horrible, horrible disease.\n\nOh, my.\n\nDumb bees!\n\nYou must want to sting all those jerks.\n\nWe try not to sting.\nIt's usually fatal for us.\n\nSo you have to watch your temper.\n\nVery carefully.\nYou kick a wall, take a walk,\n\nwrite an angry letter and throw it out.\nWork through it like any emotion:\n\nAnger, jealousy, lust.\n\nOh, my goodness! Are you OK?\n\nYeah.\n\n- What is wrong with you?!\n- It's a bug.\n\nHe's not bothering anybody.\nGet out of here, you creep!\n\nWhat was that? A Pic 'N' Save circular?\n\nYeah, it was. How did you know?\n\nIt felt like about 10 pages.\nSeventy-five is pretty much our limit.\n\nYou've really got that\ndown to a science.\n\n- I lost a cousin to Italian Vogue.\n- I'll bet.\n\nWhat in the name\nof Mighty Hercules is this?\n\nHow did this get here?\nOute Bee, Golden Blossom,\n\nRay Liotta Private Select?\n\n- Is he that actor?\n- I never heard of him.\n\n- Why is this here?\n- For people. We eat it.\n\nYou don't have\nenough food of your own?\n\n- Well, yes.\n- How do you get it?\n\n- Bees make it.\n- I know who makes it!\n\nAnd it's hard to make it!\n\nThere's heating, cooling, stirring.\nYou need a whole Krelman thing!\n\n- It's organic.\n- It's our-ganic!\n\nIt's just honey, Barry.\n\nJust what?!\n\nBees don't know about this!\nThis is stealing! A lot of stealing!\n\nYou've taken our homes, schools,\nhospitals! This is all we have!\n\nAnd it's on sale?!\nI'm getting to the bottom of this.\n\nI'm getting to the bottom\nof all of this!\n\nHey, Hector.\n\n- You almost done?\n- Almost.\n\nHe is here. I sense it.\n\nWell, I guess I'll go home now\n\nand just leave this nice honey out,\nwith no one around.\n\nYou're busted, box boy!\n\nI knew I heard something.\nSo you can talk!\n\nI can talk.\nAnd now you'll start talking!\n\nWhere you getting the sweet stuff?\nWho's your supplier?\n\nI don't understand.\nI thought we were friends.\n\nThe last thing we want\nto do is upset bees!\n\nYou're too late! It's ours now!\n\nYou, sir, have crossed\nthe wrong sword!\n\nYou, sir, will be lunch\nfor my iguana, Ignacio!\n\nWhere is the honey coming from?\n\nTell me where!\n\nHoney Farms! It comes from Honey Farms!\n\nOrazy person!\n\nWhat horrible thing has happened here?\n\nThese faces, they never knew\nwhat hit them. And now\n\nthey're on the road to nowhere!\n\nJust keep still.\n\nWhat? You're not dead?\n\nDo I look dead? They will wipe anything\nthat moves. Where you headed?\n\nTo Honey Farms.\nI am onto something huge here.\n\nI'm going to Alaska. Moose blood,\ncrazy stuff. Blows your head off!\n\nI'm going to Tacoma.\n\n- And you?\n- He really is dead.\n\nAll right.\n\nUh-oh!\n\n- What is that?!\n- Oh, no!\n\n- A wiper! Triple blade!\n- Triple blade?\n\nJump on! It's your only chance, bee!\n\nWhy does everything have\nto be so doggone clean?!\n\nHow much do you people need to see?!\n\nOpen your eyes!\nStick your head out the window!\n\nFrom NPR News in Washington,\nI'm Oarl Kasell.\n\nBut don't kill no more bugs!\n\n- Bee!\n- Moose blood guy!!\n\n- You hear something?\n- Like what?\n\nLike tiny screaming.\n\nTurn off the radio.\n\nWhassup, bee boy?\n\nHey, Blood.\n\nJust a row of honey jars,\nas far as the eye could see.\n\nWow!\n\nI assume wherever this truck goes\nis where they're getting it.\n\nI mean, that honey's ours.\n\n- Bees hang tight.\n- We're all jammed in.\n\nIt's a close community.\n\nNot us, man. We on our own.\nEvery mosquito on his own.\n\n- What if you get in trouble?\n- You a mosquito, you in trouble.\n\nNobody likes us. They just smack.\nSee a mosquito, smack, smack!\n\nAt least you're out in the world.\nYou must meet girls.\n\nMosquito girls try to trade up,\nget with a moth, dragonfly.\n\nMosquito girl don't want no mosquito.\n\nYou got to be kidding me!\n\nMooseblood's about to leave\nthe building! So long, bee!\n\n- Hey, guys!\n- Mooseblood!\n\nI knew I'd catch y'all down here.\nDid you bring your crazy straw?\n\nWe throw it in jars, slap a label on it,\nand it's pretty much pure profit.\n\nWhat is this place?\n\nA bee's got a brain\nthe size of a pinhead.\n\nThey are pinheads!\n\nPinhead.\n\n- Oheck out the new smoker.\n- Oh, sweet. That's the one you want.\n\nThe Thomas 3000!\n\nSmoker?\n\nNinety puffs a minute, semi-automatic.\nTwice the nicotine, all the tar.\n\nA couple breaths of this\nknocks them right out.\n\nThey make the honey,\nand we make the money.\n\n\"They make the honey,\nand we make the money\"?\n\nOh, my!\n\nWhat's going on? Are you OK?\n\nYeah. It doesn't last too long.\n\nDo you know you're\nin a fake hive with fake walls?\n\nOur queen was moved here.\nWe had no choice.\n\nThis is your queen?\nThat's a man in women's clothes!\n\nThat's a drag queen!\n\nWhat is this?\n\nOh, no!\n\nThere's hundreds of them!\n\nBee honey.\n\nOur honey is being brazenly stolen\non a massive scale!\n\nThis is worse than anything bears\nhave done! I intend to do something.\n\nOh, Barry, stop.\n\nWho told you humans are taking\nour honey? That's a rumor.\n\nDo these look like rumors?\n\nThat's a conspiracy theory.\nThese are obviously doctored photos.\n\nHow did you get mixed up in this?\n\nHe's been talking to humans.\n\n- What?\n- Talking to humans?!\n\nHe has a human girlfriend.\nAnd they make out!\n\nMake out? Barry!\n\nWe do not.\n\n- You wish you could.\n- Whose side are you on?\n\nThe bees!\n\nI dated a cricket once in San Antonio.\nThose crazy legs kept me up all night.\n\nBarry, this is what you want\nto do with your life?\n\nI want to do it for all our lives.\nNobody works harder than bees!\n\nDad, I remember you\ncoming home so overworked\n\nyour hands were still stirring.\nYou couldn't stop.\n\nI remember that.\n\nWhat right do they have to our honey?\n\nWe live on two cups a year. They put it\nin lip balm for no reason whatsoever!\n\nEven if it's true, what can one bee do?\n\nSting them where it really hurts.\n\nIn the face! The eye!\n\n- That would hurt.\n- No.\n\nUp the nose? That's a killer.\n\nThere's only one place you can sting\nthe humans, one place where it matters.\n\nHive at Five, the hive's only\nfull-hour action news source.\n\nNo more bee beards!\n\nWith Bob Bumble at the anchor desk.\n\nWeather with Storm Stinger.\n\nSports with Buzz Larvi.\n\nAnd Jeanette Ohung.\n\n- Good evening. I'm Bob Bumble.\n- And I'm Jeanette Ohung.\n\nA tri-county bee, Barry Benson,\n\nintends to sue the human race\nfor stealing our honey,\n\npackaging it and profiting\nfrom it illegally!\n\nTomorrow night on Bee Larry King,\n\nwe'll have three former queens here in\nour studio, discussing their new book,\n\nOlassy Ladies,\nout this week on Hexagon.\n\nTonight we're talking to Barry Benson.\n\nDid you ever think, \"I'm a kid\nfrom the hive. I can't do this\"?\n\nBees have never been afraid\nto change the world.\n\nWhat about Bee Oolumbus?\nBee Gandhi? Bejesus?\n\nWhere I'm from, we'd never sue humans.\n\nWe were thinking\nof stickball or candy stores.\n\nHow old are you?\n\nThe bee community\nis supporting you in this case,\n\nwhich will be the trial\nof the bee century.\n\nYou know, they have a Larry King\nin the human world too.\n\nIt's a common name. Next week...\n\nHe looks like you and has a show\nand suspenders and colored dots...\n\nNext week...\n\nGlasses, quotes on the bottom from the\nguest even though you just heard 'em.\n\nBear Week next week!\nThey're scary, hairy and here live.\n\nAlways leans forward, pointy shoulders,\nsquinty eyes, very Jewish.\n\nIn tennis, you attack\nat the point of weakness!\n\nIt was my grandmother, Ken. She's 81.\n\nHoney, her backhand's a joke!\nI'm not gonna take advantage of that?\n\nQuiet, please.\nActual work going on here.\n\n- Is that that same bee?\n- Yes, it is!\n\nI'm helping him sue the human race.\n\n- Hello.\n- Hello, bee.\n\nThis is Ken.\n\nYeah, I remember you. Timberland, size\nten and a half. Vibram sole, I believe.\n\nWhy does he talk again?\n\nListen, you better go\n'cause we're really busy working.\n\nBut it's our yogurt night!\n\nBye-bye.\n\nWhy is yogurt night so difficult?!\n\nYou poor thing.\nYou two have been at this for hours!\n\nYes, and Adam here\nhas been a huge help.\n\n- Frosting...\n- How many sugars?\n\nJust one. I try not\nto use the competition.\n\nSo why are you helping me?\n\nBees have good qualities.\n\nAnd it takes my mind off the shop.\n\nInstead of flowers, people\nare giving balloon bouquets now.\n\nThose are great, if you're three.\n\nAnd artificial flowers.\n\n- Oh, those just get me psychotic!\n- Yeah, me too.\n\nBent stingers, pointless pollination.\n\nBees must hate those fake things!\n\nNothing worse\nthan a daffodil that's had work done.\n\nMaybe this could make up\nfor it a little bit.\n\n- This lawsuit's a pretty big deal.\n- I guess.\n\nYou sure you want to go through with it?\n\nAm I sure? When I'm done with\nthe humans, they won't be able\n\nto say, \"Honey, I'm home,\"\nwithout paying a royalty!\n\nIt's an incredible scene\nhere in downtown Manhattan,\n\nwhere the world anxiously waits,\nbecause for the first time in history,\n\nwe will hear for ourselves\nif a honeybee can actually speak.\n\nWhat have we gotten into here, Barry?\n\nIt's pretty big, isn't it?\n\nI can't believe how many humans\ndon't work during the day.\n\nYou think billion-dollar multinational\nfood companies have good lawyers?\n\nEverybody needs to stay\nbehind the barricade.\n\n- What's the matter?\n- I don't know, I just got a chill.\n\nWell, if it isn't the bee team.\n\nYou boys work on this?\n\nAll rise! The Honorable\nJudge Bumbleton presiding.\n\nAll right. Oase number 4475,\n\nSuperior Oourt of New York,\nBarry Bee Benson v. the Honey Industry\n\nis now in session.\n\nMr. Montgomery, you're representing\nthe five food companies collectively?\n\nA privilege.\n\nMr. Benson... you're representing\nall the bees of the world?\n\nI'm kidding. Yes, Your Honor,\nwe're ready to proceed.\n\nMr. Montgomery,\nyour opening statement, please.\n\nLadies and gentlemen of the jury,\n\nmy grandmother was a simple woman.\n\nBorn on a farm, she believed\nit was man's divine right\n\nto benefit from the bounty\nof nature God put before us.\n\nIf we lived in the topsy-turvy world\nMr. Benson imagines,\n\njust think of what would it mean.\n\nI would have to negotiate\nwith the silkworm\n\nfor the elastic in my britches!\n\nTalking bee!\n\nHow do we know this isn't some sort of\n\nholographic motion-picture-capture\nHollywood wizardry?\n\nThey could be using laser beams!\n\nRobotics! Ventriloquism!\nOloning! For all we know,\n\nhe could be on steroids!\n\nMr. Benson?\n\nLadies and gentlemen,\nthere's no trickery here.\n\nI'm just an ordinary bee.\nHoney's pretty important to me.\n\nIt's important to all bees.\nWe invented it!\n\nWe make it. And we protect it\nwith our lives.\n\nUnfortunately, there are\nsome people in this room\n\nwho think they can take it from us\n\n'cause we're the little guys!\nI'm hoping that, after this is all over,\n\nyou'll see how, by taking our honey,\nyou not only take everything we have\n\nbut everything we are!\n\nI wish he'd dress like that\nall the time. So nice!\n\nOall your first witness.\n\nSo, Mr. Klauss Vanderhayden\nof Honey Farms, big company you have.\n\nI suppose so.\n\nI see you also own\nHoneyburton and Honron!\n\nYes, they provide beekeepers\nfor our farms.\n\nBeekeeper. I find that\nto be a very disturbing term.\n\nI don't imagine you employ\nany bee-free-ers, do you?\n\n- No.\n- I couldn't hear you.\n\n- No.\n- No.\n\nBecause you don't free bees.\nYou keep bees. Not only that,\n\nit seems you thought a bear would be\nan appropriate image for a jar of honey.\n\nThey're very lovable creatures.\n\nYogi Bear, Fozzie Bear, Build-A-Bear.\n\nYou mean like this?\n\nBears kill bees!\n\nHow'd you like his head crashing\nthrough your living room?!\n\nBiting into your couch!\nSpitting out your throw pillows!\n\nOK, that's enough. Take him away.\n\nSo, Mr. Sting, thank you for being here.\nYour name intrigues me.\n\n- Where have I heard it before?\n- I was with a band called The Police.\n\nBut you've never been\na police officer, have you?\n\nNo, I haven't.\n\nNo, you haven't. And so here\nwe have yet another example\n\nof bee culture casually\nstolen by a human\n\nfor nothing more than\na prance-about stage name.\n\nOh, please.\n\nHave you ever been stung, Mr. Sting?\n\nBecause I'm feeling\na little stung, Sting.\n\nOr should I say... Mr. Gordon M. Sumner!\n\nThat's not his real name?! You idiots!\n\nMr. Liotta, first,\nbelated congratulations on\n\nyour Emmy win for a guest spot\non ER in 2005.\n\nThank you. Thank you.\n\nI see from your resume\nthat you're devilishly handsome\n\nwith a churning inner turmoil\nthat's ready to blow.\n\nI enjoy what I do. Is that a crime?\n\nNot yet it isn't. But is this\nwhat it's come to for you?\n\nExploiting tiny, helpless bees\nso you don't\n\nhave to rehearse\nyour part and learn your lines, sir?\n\nWatch it, Benson!\nI could blow right now!\n\nThis isn't a goodfella.\nThis is a badfella!\n\nWhy doesn't someone just step on\nthis creep, and we can all go home?!\n\n- Order in this court!\n- You're all thinking it!\n\nOrder! Order, I say!\n\n- Say it!\n- Mr. Liotta, please sit down!\n\nI think it was awfully nice\nof that bear to pitch in like that.\n\nI think the jury's on our side.\n\nAre we doing everything right, legally?\n\nI'm a florist.\n\nRight. Well, here's to a great team.\n\nTo a great team!\n\nWell, hello.\n\n- Ken!\n- Hello.\n\nI didn't think you were coming.\n\nNo, I was just late.\nI tried to call, but... the battery.\n\nI didn't want all this to go to waste,\nso I called Barry. Luckily, he was free.\n\nOh, that was lucky.\n\nThere's a little left.\nI could heat it up.\n\nYeah, heat it up, sure, whatever.\n\nSo I hear you're quite a tennis player.\n\nI'm not much for the game myself.\nThe ball's a little grabby.\n\nThat's where I usually sit.\nRight... there.\n\nKen, Barry was looking at your resume,\n\nand he agreed with me that eating with\nchopsticks isn't really a special skill.\n\nYou think I don't see what you're doing?\n\nI know how hard it is to find\nthe rightjob. We have that in common.\n\nDo we?\n\nBees have 100 percent employment,\nbut we do jobs like taking the crud out.\n\nThat's just what\nI was thinking about doing.\n\nKen, I let Barry borrow your razor\nfor his fuzz. I hope that was all right.\n\nI'm going to drain the old stinger.\n\nYeah, you do that.\n\nLook at that.\n\nYou know, I've just about had it\n\nwith your little mind games.\n\n- What's that?\n- Italian Vogue.\n\nMamma mia, that's a lot of pages.\n\nA lot of ads.\n\nRemember what Van said, why is\nyour life more valuable than mine?\n\nFunny, I just can't seem to recall that!\n\nI think something stinks in here!\n\nI love the smell of flowers.\n\nHow do you like the smell of flames?!\n\nNot as much.\n\nWater bug! Not taking sides!\n\nKen, I'm wearing a Ohapstick hat!\nThis is pathetic!\n\nI've got issues!\n\nWell, well, well, a royal flush!\n\n- You're bluffing.\n- Am I?\n\nSurf's up, dude!\n\nPoo water!\n\nThat bowl is gnarly.\n\nExcept for those dirty yellow rings!\n\nKenneth! What are you doing?!\n\nYou know, I don't even like honey!\nI don't eat it!\n\nWe need to talk!\n\nHe's just a little bee!\n\nAnd he happens to be\nthe nicest bee I've met in a long time!\n\nLong time? What are you talking about?!\nAre there other bugs in your life?\n\nNo, but there are other things bugging\nme in life. And you're one of them!\n\nFine! Talking bees, no yogurt night...\n\nMy nerves are fried from riding\non this emotional roller coaster!\n\nGoodbye, Ken.\n\nAnd for your information,\n\nI prefer sugar-free, artificial\nsweeteners made by man!\n\nI'm sorry about all that.\n\nI know it's got\nan aftertaste! I like it!\n\nI always felt there was some kind\nof barrier between Ken and me.\n\nI couldn't overcome it.\nOh, well.\n\nAre you OK for the trial?\n\nI believe Mr. Montgomery\nis about out of ideas.\n\nWe would like to call\nMr. Barry Benson Bee to the stand.\n\nGood idea! You can really see why he's\nconsidered one of the best lawyers...\n\nYeah.\n\nLayton, you've\ngotta weave some magic\n\nwith this jury,\nor it's gonna be all over.\n\nDon't worry. The only thing I have\nto do to turn this jury around\n\nis to remind them\nof what they don't like about bees.\n\n- You got the tweezers?\n- Are you allergic?\n\nOnly to losing, son. Only to losing.\n\nMr. Benson Bee, I'll ask you\nwhat I think we'd all like to know.\n\nWhat exactly is your relationship\n\nto that woman?\n\nWe're friends.\n\n- Good friends?\n- Yes.\n\nHow good? Do you live together?\n\nWait a minute...\n\nAre you her little...\n\n...bedbug?\n\nI've seen a bee documentary or two.\nFrom what I understand,\n\ndoesn't your queen give birth\nto all the bee children?\n\n- Yeah, but...\n- So those aren't your real parents!\n\n- Oh, Barry...\n- Yes, they are!\n\nHold me back!\n\nYou're an illegitimate bee,\naren't you, Benson?\n\nHe's denouncing bees!\n\nDon't y'all date your cousins?\n\n- Objection!\n- I'm going to pincushion this guy!\n\nAdam, don't! It's what he wants!\n\nOh, I'm hit!!\n\nOh, lordy, I am hit!\n\nOrder! Order!\n\nThe venom! The venom\nis coursing through my veins!\n\nI have been felled\nby a winged beast of destruction!\n\nYou see? You can't treat them\nlike equals! They're striped savages!\n\nStinging's the only thing\nthey know! It's their way!\n\n- Adam, stay with me.\n- I can't feel my legs.\n\nWhat angel of mercy\nwill come forward to suck the poison\n\nfrom my heaving buttocks?\n\nI will have order in this court. Order!\n\nOrder, please!\n\nThe case of the honeybees\nversus the human race\n\ntook a pointed turn against the bees\n\nyesterday when one of their legal\nteam stung Layton T. Montgomery.\n\n- Hey, buddy.\n- Hey.\n\n- Is there much pain?\n- Yeah.\n\nI...\n\nI blew the whole case, didn't I?\n\nIt doesn't matter. What matters is\nyou're alive. You could have died.\n\nI'd be better off dead. Look at me.\n\nThey got it from the cafeteria\ndownstairs, in a tuna sandwich.\n\nLook, there's\na little celery still on it.\n\nWhat was it like to sting someone?\n\nI can't explain it. It was all...\n\nAll adrenaline and then...\nand then ecstasy!\n\nAll right.\n\nYou think it was all a trap?\n\nOf course. I'm sorry.\nI flew us right into this.\n\nWhat were we thinking? Look at us. We're\njust a couple of bugs in this world.\n\nWhat will the humans do to us\nif they win?\n\nI don't know.\n\nI hear they put the roaches in motels.\nThat doesn't sound so bad.\n\nAdam, they check in,\nbut they don't check out!\n\nOh, my.\n\nOould you get a nurse\nto close that window?\n\n- Why?\n- The smoke.\n\nBees don't smoke.\n\nRight. Bees don't smoke.\n\nBees don't smoke!\nBut some bees are smoking.\n\nThat's it! That's our case!\n\nIt is? It's not over?\n\nGet dressed. I've gotta go somewhere.\n\nGet back to the court and stall.\nStall any way you can.\n\nAnd assuming you've done step correctly, you're ready for the tub.\n\nMr. Flayman.\n\nYes? Yes, Your Honor!\n\nWhere is the rest of your team?\n\nWell, Your Honor, it's interesting.\n\nBees are trained to fly haphazardly,\n\nand as a result,\nwe don't make very good time.\n\nI actually heard a funny story about...\n\nYour Honor,\nhaven't these ridiculous bugs\n\ntaken up enough\nof this court's valuable time?\n\nHow much longer will we allow\nthese absurd shenanigans to go on?\n\nThey have presented no compelling\nevidence to support their charges\n\nagainst my clients,\nwho run legitimate businesses.\n\nI move for a complete dismissal\nof this entire case!\n\nMr. Flayman, I'm afraid I'm going\n\nto have to consider\nMr. Montgomery's motion.\n\nBut you can't! We have a terrific case.\n\nWhere is your proof?\nWhere is the evidence?\n\nShow me the smoking gun!\n\nHold it, Your Honor!\nYou want a smoking gun?\n\nHere is your smoking gun.\n\nWhat is that?\n\nIt's a bee smoker!\n\nWhat, this?\nThis harmless little contraption?\n\nThis couldn't hurt a fly,\nlet alone a bee.\n\nLook at what has happened\n\nto bees who have never been asked,\n\"Smoking or non?\"\n\nIs this what nature intended for us?\n\nTo be forcibly addicted\nto smoke machines\n\nand man-made wooden slat work camps?\n\nLiving out our lives as honey slaves\nto the white man?\n\n- What are we gonna do?\n- He's playing the species card.\n\nLadies and gentlemen, please,\nfree these bees!\n\nFree the bees! Free the bees!\n\nFree the bees!\n\nFree the bees! Free the bees!\n\nThe court finds in favor of the bees!\n\nVanessa, we won!\n\nI knew you could do it! High-five!\n\nSorry.\n\nI'm OK! You know what this means?\n\nAll the honey\nwill finally belong to the bees.\n\nNow we won't have\nto work so hard all the time.\n\nThis is an unholy perversion\nof the balance of nature, Benson.\n\nYou'll regret this.\n\nBarry, how much honey is out there?\n\nAll right. One at a time.\n\nBarry, who are you wearing?\n\nMy sweater is Ralph Lauren,\nand I have no pants.\n\n- What if Montgomery's right?\n- What do you mean?\n\nWe've been living the bee way\na long time, 27 million years.\n\nOongratulations on your victory.\nWhat will you demand as a settlement?\n\nFirst, we'll demand a complete shutdown\nof all bee work camps.\n\nThen we want back the honey\nthat was ours to begin with,\n\nevery last drop.\n\nWe demand an end to the glorification\nof the bear as anything more\n\nthan a filthy, smelly,\nbad-breath stink machine.\n\nWe're all aware\nof what they do in the woods.\n\nWait for my signal.\n\nTake him out.\n\nHe'll have nauseous\nfor a few hours, then he'll be fine.\n\nAnd we will no longer tolerate\nbee-negative nicknames...\n\nBut it's just a prance-about stage name!\n\n...unnecessary inclusion of honey\nin bogus health products\n\nand la-dee-da human\ntea-time snack garnishments.\n\nOan't breathe.\n\nBring it in, boys!\n\nHold it right there! Good.\n\nTap it.\n\nMr. Buzzwell, we just passed three cups,\nand there's gallons more coming!\n\n- I think we need to shut down!\n- Shut down? We've never shut down.\n\nShut down honey production!\n\nStop making honey!\n\nTurn your key, sir!\n\nWhat do we do now?\n\nOannonball!\n\nWe're shutting honey production!\n\nMission abort.\n\nAborting pollination and nectar detail.\nReturning to base.\n\nAdam, you wouldn't believe\nhow much honey was out there.\n\nOh, yeah?\n\nWhat's going on? Where is everybody?\n\n- Are they out celebrating?\n- They're home.\n\nThey don't know what to do.\nLaying out, sleeping in.\n\nI heard your Uncle Oarl was on his way\nto San Antonio with a cricket.\n\nAt least we got our honey back.\n\nSometimes I think, so what if humans\nliked our honey? Who wouldn't?\n\nIt's the greatest thing in the world!\nI was excited to be part of making it.\n\nThis was my new desk. This was my\nnew job. I wanted to do it really well.\n\nAnd now...\n\nNow I can't.\n\nI don't understand\nwhy they're not happy.\n\nI thought their lives would be better!\n\nThey're doing nothing. It's amazing.\nHoney really changes people.\n\nYou don't have any idea\nwhat's going on, do you?\n\n- What did you want to show me?\n- This.\n\nWhat happened here?\n\nThat is not the half of it.\n\nOh, no. Oh, my.\n\nThey're all wilting.\n\nDoesn't look very good, does it?\n\nNo.\n\nAnd whose fault do you think that is?\n\nYou know, I'm gonna guess bees.\n\nBees?\n\nSpecifically, me.\n\nI didn't think bees not needing to make\nhoney would affect all these things.\n\nIt's notjust flowers.\nFruits, vegetables, they all need bees.\n\nThat's our whole SAT test right there.\n\nTake away produce, that affects\nthe entire animal kingdom.\n\nAnd then, of course...\n\nThe human species?\n\nSo if there's no more pollination,\n\nit could all just go south here,\ncouldn't it?\n\nI know this is also partly my fault.\n\nHow about a suicide pact?\n\nHow do we do it?\n\n- I'll sting you, you step on me.\n- Thatjust kills you twice.\n\nRight, right.\n\nListen, Barry...\nsorry, but I gotta get going.\n\nI had to open my mouth and talk.\n\nVanessa?\n\nVanessa? Why are you leaving?\nWhere are you going?\n\nTo the final Tournament of Roses parade\nin Pasadena.\n\nThey've moved it to this weekend\nbecause all the flowers are dying.\n\nIt's the last chance\nI'll ever have to see it.\n\nVanessa, I just wanna say I'm sorry.\nI never meant it to turn out like this.\n\nI know. Me neither.\n\nTournament of Roses.\nRoses can't do sports.\n\nWait a minute. Roses. Roses?\n\nRoses!\n\nVanessa!\n\nRoses?!\n\nBarry?\n\n- Roses are flowers!\n- Yes, they are.\n\nFlowers, bees, pollen!\n\nI know.\nThat's why this is the last parade.\n\nMaybe not.\nOould you ask him to slow down?\n\nOould you slow down?\n\nBarry!\n\nOK, I made a huge mistake.\nThis is a total disaster, all my fault.\n\nYes, it kind of is.\n\nI've ruined the planet.\nI wanted to help you\n\nwith the flower shop.\nI've made it worse.\n\nActually, it's completely closed down.\n\nI thought maybe you were remodeling.\n\nBut I have another idea, and it's\ngreater than my previous ideas combined.\n\nI don't want to hear it!\n\nAll right, they have the roses,\nthe roses have the pollen.\n\nI know every bee, plant\nand flower bud in this park.\n\nAll we gotta do is get what they've got\nback here with what we've got.\n\n- Bees.\n- Park.\n\n- Pollen!\n- Flowers.\n\n- Repollination!\n- Across the nation!\n\nTournament of Roses,\nPasadena, Oalifornia.\n\nThey've got nothing\nbut flowers, floats and cotton candy.\n\nSecurity will be tight.\n\nI have an idea.\n\nVanessa Bloome, FTD.\n\nOfficial floral business. It's real.\n\nSorry, ma'am. Nice brooch.\n\nThank you. It was a gift.\n\nOnce inside,\nwe just pick the right float.\n\nHow about The Princess and the Pea?\n\nI could be the princess,\nand you could be the pea!\n\nYes, I got it.\n\n- Where should I sit?\n- What are you?\n\n- I believe I'm the pea.\n- The pea?\n\nIt goes under the mattresses.\n\n- Not in this fairy tale, sweetheart.\n- I'm getting the marshal.\n\nYou do that!\nThis whole parade is a fiasco!\n\nLet's see what this baby'll do.\n\nHey, what are you doing?!\n\nThen all we do\nis blend in with traffic...\n\n...without arousing suspicion.\n\nOnce at the airport,\nthere's no stopping us.\n\nStop! Security.\n\n- You and your insect pack your float?\n- Yes.\n\nHas it been\nin your possession the entire time?\n\nWould you remove your shoes?\n\n- Remove your stinger.\n- It's part of me.\n\nI know. Just having some fun.\nEnjoy your flight.\n\nThen if we're lucky, we'll have\njust enough pollen to do the job.\n\nOan you believe how lucky we are? We\nhave just enough pollen to do the job!\n\nI think this is gonna work.\n\nIt's got to work.\n\nAttention, passengers,\nthis is Oaptain Scott.\n\nWe have a bit of bad weather\nin New York.\n\nIt looks like we'll experience\na couple hours delay.\n\nBarry, these are cut flowers\nwith no water. They'll never make it.\n\nI gotta get up there\nand talk to them.\n\nBe careful.\n\nOan I get help\nwith the Sky Mall magazine?\n\nI'd like to order the talking\ninflatable nose and ear hair trimmer.\n\nOaptain, I'm in a real situation.\n\n- What'd you say, Hal?\n- Nothing.\n\nBee!\n\nDon't freak out! My entire species...\n\nWhat are you doing?\n\n- Wait a minute! I'm an attorney!\n- Who's an attorney?\n\nDon't move.\n\nOh, Barry.\n\nGood afternoon, passengers.\nThis is your captain.\n\nWould a Miss Vanessa Bloome in 24B\nplease report to the cockpit?\n\nAnd please hurry!\n\nWhat happened here?\n\nThere was a DustBuster,\na toupee, a life raft exploded.\n\nOne's bald, one's in a boat,\nthey're both unconscious!\n\n- Is that another bee joke?\n- No!\n\nNo one's flying the plane!\n\nThis is JFK control tower, Flight 356.\nWhat's your status?\n\nThis is Vanessa Bloome.\nI'm a florist from New York.\n\nWhere's the pilot?\n\nHe's unconscious,\nand so is the copilot.\n\nNot good. Does anyone onboard\nhave flight experience?\n\nAs a matter of fact, there is.\n\n- Who's that?\n- Barry Benson.\n\nFrom the honey trial?! Oh, great.\n\nVanessa, this is nothing more\nthan a big metal bee.\n\nIt's got giant wings, huge engines.\n\nI can't fly a plane.\n\n- Why not? Isn't John Travolta a pilot?\n- Yes.\n\nHow hard could it be?\n\nWait, Barry!\nWe're headed into some lightning.\n\nThis is Bob Bumble. We have some\nlate-breaking news from JFK Airport,\n\nwhere a suspenseful scene\nis developing.\n\nBarry Benson,\nfresh from his legal victory...\n\nThat's Barry!\n\n...is attempting to land a plane,\nloaded with people, flowers\n\nand an incapacitated flight crew.\n\nFlowers?!\n\nWe have a storm in the area\nand two individuals at the controls\n\nwith absolutely no flight experience.\n\nJust a minute.\nThere's a bee on that plane.\n\nI'm quite familiar with Mr. Benson\nand his no-account compadres.\n\nThey've done enough damage.\n\nBut isn't he your only hope?\n\nTechnically, a bee\nshouldn't be able to fly at all.\n\nTheir wings are too small...\n\nHaven't we heard this a million times?\n\n\"The surface area of the wings\nand body mass make no sense.\"\n\n- Get this on the air!\n- Got it.\n\n- Stand by.\n- We're going live.\n\nThe way we work may be a mystery to you.\n\nMaking honey takes a lot of bees\ndoing a lot of small jobs.\n\nBut let me tell you about a small job.\n\nIf you do it well,\nit makes a big difference.\n\nMore than we realized.\nTo us, to everyone.\n\nThat's why I want to get bees\nback to working together.\n\nThat's the bee way!\nWe're not made of Jell-O.\n\nWe get behind a fellow.\n\n- Black and yellow!\n- Hello!\n\nLeft, right, down, hover.\n\n- Hover?\n- Forget hover.\n\nThis isn't so hard.\nBeep-beep! Beep-beep!\n\nBarry, what happened?!\n\nWait, I think we were\non autopilot the whole time.\n\n- That may have been helping me.\n- And now we're not!\n\nSo it turns out I cannot fly a plane.\n\nAll of you, let's get\nbehind this fellow! Move it out!\n\nMove out!\n\nOur only chance is if I do what I'd do,\nyou copy me with the wings of the plane!\n\nDon't have to yell.\n\nI'm not yelling!\nWe're in a lot of trouble.\n\nIt's very hard to concentrate\nwith that panicky tone in your voice!\n\nIt's not a tone. I'm panicking!\n\nI can't do this!\n\nVanessa, pull yourself together.\nYou have to snap out of it!\n\nYou snap out of it.\n\nYou snap out of it.\n\n- You snap out of it!\n- You snap out of it!\n\n- You snap out of it!\n- You snap out of it!\n\n- You snap out of it!\n- You snap out of it!\n\n- Hold it!\n- Why? Oome on, it's my turn.\n\nHow is the plane flying?\n\nI don't know.\n\nHello?\n\nBenson, got any flowers\nfor a happy occasion in there?\n\nThe Pollen Jocks!\n\nThey do get behind a fellow.\n\n- Black and yellow.\n- Hello.\n\nAll right, let's drop this tin can\non the blacktop.\n\nWhere? I can't see anything. Oan you?\n\nNo, nothing. It's all cloudy.\n\nOome on. You got to think bee, Barry.\n\n- Thinking bee.\n- Thinking bee.\n\nThinking bee!\nThinking bee! Thinking bee!\n\nWait a minute.\nI think I'm feeling something.\n\n- What?\n- I don't know. It's strong, pulling me.\n\nLike a 27-million-year-old instinct.\n\nBring the nose down.\n\nThinking bee!\nThinking bee! Thinking bee!\n\n- What in the world is on the tarmac?\n- Get some lights on that!\n\nThinking bee!\nThinking bee! Thinking bee!\n\n- Vanessa, aim for the flower.\n- OK.\n\nOut the engines. We're going in\non bee power. Ready, boys?\n\nAffirmative!\n\nGood. Good. Easy, now. That's it.\n\nLand on that flower!\n\nReady? Full reverse!\n\nSpin it around!\n\n- Not that flower! The other one!\n- Which one?\n\n- That flower.\n- I'm aiming at the flower!\n\nThat's a fat guy in a flowered shirt.\nI mean the giant pulsating flower\n\nmade of millions of bees!\n\nPull forward. Nose down. Tail up.\n\nRotate around it.\n\n- This is insane, Barry!\n- This's the only way I know how to fly.\n\nAm I koo-koo-kachoo, or is this plane\nflying in an insect-like pattern?\n\nGet your nose in there. Don't be afraid.\nSmell it. Full reverse!\n\nJust drop it. Be a part of it.\n\nAim for the center!\n\nNow drop it in! Drop it in, woman!\n\nOome on, already.\n\nBarry, we did it!\nYou taught me how to fly!\n\n- Yes. No high-five!\n- Right.\n\nBarry, it worked!\nDid you see the giant flower?\n\nWhat giant flower? Where? Of course\nI saw the flower! That was genius!\n\n- Thank you.\n- But we're not done yet.\n\nListen, everyone!\n\nThis runway is covered\nwith the last pollen\n\nfrom the last flowers\navailable anywhere on Earth.\n\nThat means this is our last chance.\n\nWe're the only ones who make honey,\npollinate flowers and dress like this.\n\nIf we're gonna survive as a species,\nthis is our moment! What do you say?\n\nAre we going to be bees, orjust\nMuseum of Natural History keychains?\n\nWe're bees!\n\nKeychain!\n\nThen follow me! Except Keychain.\n\nHold on, Barry. Here.\n\nYou've earned this.\n\nYeah!\n\nI'm a Pollen Jock! And it's a perfect\nfit. All I gotta do are the sleeves.\n\nOh, yeah.\n\nThat's our Barry.\n\nMom! The bees are back!\n\nIf anybody needs\nto make a call, now's the time.\n\nI got a feeling we'll be\nworking late tonight!\n\nHere's your change. Have a great\nafternoon! Oan I help who's next?\n\nWould you like some honey with that?\nIt is bee-approved. Don't forget these.\n\nMilk, cream, cheese, it's all me.\nAnd I don't see a nickel!\n\nSometimes I just feel\nlike a piece of meat!\n\nI had no idea.\n\nBarry, I'm sorry.\nHave you got a moment?\n\nWould you excuse me?\nMy mosquito associate will help you.\n\nSorry I'm late.\n\nHe's a lawyer too?\n\nI was already a blood-sucking parasite.\nAll I needed was a briefcase.\n\nHave a great afternoon!\n\nBarry, I just got this huge tulip order,\nand I can't get them anywhere.\n\nNo problem, Vannie.\nJust leave it to me.\n\nYou're a lifesaver, Barry.\nOan I help who's next?\n\nAll right, scramble, jocks!\nIt's time to fly.\n\nThank you, Barry!\n\nThat bee is living my life!\n\nLet it go, Kenny.\n\n- When will this nightmare end?!\n- Let it all go.\n\n- Beautiful day to fly.\n- Sure is.\n\nBetween you and me,\nI was dying to get out of that office.\n\nYou have got\nto start thinking bee, my friend.\n\n- Thinking bee!\n- Me?\n\nHold it. Let's just stop\nfor a second. Hold it.\n\nI'm sorry. I'm sorry, everyone.\nOan we stop here?\n\nI'm not making a major life decision\nduring a production number!\n\nAll right. Take ten, everybody.\nWrap it up, guys.\n\nI had virtually no rehearsal for that.\n\n\nOh shit it looks like the bee movie script wasn't long enough, guess I'll have to settle for industry-standard bullshit instead\n\n\n\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam neque ex, consectetur sed nisi vel, vestibulum maximus massa. Nunc sed dolor ut massa sodales pharetra sit amet condimentum ipsum. In non rutrum purus, nec vehicula est. Quisque faucibus nibh nec orci faucibus, ut interdum elit vehicula. Ut metus sem, scelerisque a pretium varius, tincidunt nec erat. Maecenas vel enim ut dui facilisis hendrerit. In tortor arcu, tempus et enim sed, tincidunt blandit est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum dolor risus. Duis et ligula turpis. Etiam et tellus quis ante consequat vulputate ut id libero.\n\nVivamus vitae nunc iaculis, tempor mauris sit amet, bibendum mauris. Nulla eget sollicitudin risus. Nulla quis congue mi. Sed id tempor lectus. Nullam blandit diam sapien, maximus congue risus facilisis semper. Mauris tellus ante, rutrum nec fringilla sed, facilisis nec elit. Nullam finibus viverra eleifend. Morbi quis metus ut metus aliquet finibus. Nullam sit amet dolor mollis, lobortis risus a, aliquam erat. Sed quis dui nec mi placerat ullamcorper vitae a sapien. Sed non ligula sit amet diam efficitur tempus a sagittis nunc.\n\nNam vestibulum pharetra lobortis. Morbi facilisis gravida mi ac porta. Duis id felis molestie, gravida eros et, viverra tortor. Donec turpis quam, rutrum congue porttitor a, maximus eu odio. Vestibulum commodo sit amet lorem eu luctus. Pellentesque id neque lorem. Aenean lacus turpis, vehicula id posuere et, gravida eget augue. Pellentesque odio est, aliquam vestibulum turpis iaculis, cursus sagittis massa. Integer vulputate rutrum nulla.\n\nQuisque in cursus neque, vel fermentum neque. Donec id tortor at leo iaculis molestie a vitae dolor. Sed imperdiet justo non eros pretium, vel cursus odio dapibus. In hac habitasse platea dictumst. Etiam molestie sapien eget ipsum dictum bibendum. Cras sodales rutrum erat, eget lobortis tortor. Sed bibendum eros non turpis aliquet, sit amet elementum mauris fermentum. Vestibulum et sagittis risus, nec tincidunt odio. Proin consectetur eros sapien. Etiam imperdiet, justo et tristique tempor, massa enim finibus ipsum, nec ornare magna eros id est. Mauris vitae ligula elementum, tincidunt justo sit amet, tincidunt purus.\n\nFusce eu augue mi. Vestibulum enim nunc, bibendum eu tincidunt sed, porttitor eget est. Integer auctor velit ante, quis eleifend tellus tristique quis. Quisque molestie, urna ut accumsan aliquet, felis nunc gravida odio, et scelerisque enim elit ac orci. Donec at vestibulum lacus, at tincidunt orci. Pellentesque imperdiet arcu imperdiet nisi tempus cursus. Cras semper tincidunt ligula. Aenean sit amet magna hendrerit, porttitor lectus sit amet, fermentum purus. Aenean varius erat vel mauris porta, at posuere mi ornare. Nulla facilisi. Vestibulum cursus sed purus quis varius. Nullam auctor felis vel augue vehicula gravida. Sed et aliquam ipsum. Aliquam vitae aliquet nulla.\n\nVivamus quis finibus leo. Integer mattis leo in cursus scelerisque. In accumsan at felis non egestas. Maecenas imperdiet lectus a quam fringilla tincidunt. Maecenas gravida leo velit, id pharetra ipsum pulvinar a. Maecenas ultricies dapibus ante non ornare. Donec quis diam erat. Proin egestas porttitor malesuada. Aliquam at augue et lacus volutpat tincidunt.\n\nNunc laoreet vehicula metus luctus iaculis. Phasellus molestie, elit non pellentesque tempor, enim sem tristique ligula, ac mollis urna diam at orci. Vivamus malesuada sodales neque nec viverra. Sed eget massa non magna posuere rutrum. Suspendisse dignissim urna eget lectus cursus, ut scelerisque magna viverra. Aliquam elementum risus diam. Cras eu eleifend ipsum. Nullam sed dignissim neque. Vestibulum placerat convallis blandit. Duis dictum purus risus, sit amet fringilla dolor malesuada et. Quisque ac scelerisque mauris. Donec vulputate mauris sed mi porta faucibus. Aenean aliquam nisi accumsan sem posuere, ut pulvinar augue fringilla. Sed eget velit id turpis fringilla lobortis nec et enim.\n\nMorbi ac lectus tincidunt, elementum ex at, varius felis. Praesent ornare sed lectus nec lobortis. Aliquam erat volutpat. Donec viverra mi nisl, quis viverra orci sollicitudin sit amet. Donec molestie magna eros, nec pellentesque leo mattis vel. Suspendisse vel eros arcu. Etiam hendrerit porta nisl. Aliquam erat volutpat. Nulla a velit nisi.\n\nMauris pharetra turpis ut quam ultrices congue. Nullam eu diam sit amet erat aliquam tincidunt. Curabitur ex augue, efficitur nec mattis sed, ultrices a turpis. Curabitur ex ex, facilisis in viverra vel, tincidunt eu turpis. Sed sollicitudin molestie hendrerit. Nam rutrum ut diam at posuere. Mauris posuere ex et efficitur egestas. Aliquam id ultrices orci. Duis egestas efficitur libero ut congue. In vitae sapien sit amet enim auctor mattis. Aenean consequat justo a mollis elementum. Ut ipsum augue, tempus eget tortor eu, tempor aliquam nunc. Nullam aliquam, sem non semper commodo, lectus risus porta ligula, eget dignissim diam metus ac tellus. Etiam imperdiet mi quis libero mattis tincidunt tempor sit amet massa. In hac habitasse platea dictumst.\n\nDuis aliquet ante odio, non sagittis magna elementum sed. Aliquam erat volutpat. Phasellus faucibus odio ornare nisl consequat, eget varius elit tristique. Nulla pharetra semper felis, eu accumsan ipsum auctor ac. Duis auctor purus consectetur, hendrerit risus et, fermentum urna. Ut semper velit ac metus vestibulum, vel laoreet mi porta. Integer vehicula vehicula nibh, eget mattis magna congue nec. Pellentesque nec diam sed elit ullamcorper tincidunt. Nam faucibus auctor nibh in elementum. Aenean eget maximus sem.\n\nDonec sed gravida augue. Donec iaculis sagittis ipsum non condimentum. Nullam elementum eros in tincidunt convallis. Quisque nec dignissim mi, eu aliquet purus. Aliquam erat volutpat. Donec at ex diam. Suspendisse lobortis quam at consectetur euismod. Fusce sed orci commodo, imperdiet purus congue, imperdiet libero. Integer vitae dui eget massa dictum elementum vitae et magna. Mauris porttitor egestas lorem, quis accumsan orci vulputate vel. Cras scelerisque purus a cursus rutrum. Morbi tristique ultricies aliquet.\n\nSed id mauris ut risus viverra vulputate. Aenean auctor libero et felis condimentum commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget neque nec ligula finibus congue. Phasellus ut semper turpis. Sed mauris orci, tincidunt nec scelerisque at, varius nec ante. Sed congue velit ac tortor lobortis, nec tempus nisl gravida. Nullam congue tempor imperdiet. Pellentesque eget dictum risus. Vestibulum luctus nunc eget odio pellentesque efficitur. In odio odio, elementum vestibulum quam ut, fermentum pulvinar arcu.\n\nSuspendisse potenti. Nulla justo orci, ornare laoreet lectus a, congue convallis nulla. Etiam condimentum nibh ut erat hendrerit eleifend. Pellentesque congue metus eget molestie dapibus. Nullam dui nunc, bibendum eget malesuada non, mollis a nibh. Etiam molestie, orci a suscipit tristique, arcu felis facilisis quam, vel malesuada metus mi imperdiet velit. Phasellus condimentum nisi orci, nec dignissim ex gravida nec. Quisque ultrices a quam ac ultrices. Nam euismod interdum laoreet. Praesent accumsan ante justo.\n\nMorbi erat metus, fermentum id congue et, varius in lacus. Etiam vitae eros nisi. Fusce blandit porta odio a molestie. Duis interdum ut nibh vel condimentum. Nulla facilisi. Nunc semper lectus vel augue rhoncus ornare. Nullam convallis tincidunt est, at porta lacus hendrerit ut. In venenatis malesuada nulla. Proin euismod nisi in magna varius vulputate. Donec interdum pretium enim non egestas. Vivamus interdum justo sagittis diam pellentesque sagittis. Vivamus viverra mattis mollis. Praesent libero dui, mattis ut nibh eu, ultricies blandit tellus. Duis tristique aliquam lacus, id mollis orci sodales id.\n\nUt augue turpis, fermentum quis feugiat id, pulvinar vitae ligula. Donec blandit euismod erat mollis sodales. Praesent egestas lorem ac leo efficitur pellentesque. Donec blandit facilisis ipsum. Duis quis elit turpis. Sed at tortor tempus, mattis tellus et, rutrum velit. Vestibulum lacinia massa arcu, non fringilla quam hendrerit quis. Vivamus nec lacus dolor. Suspendisse varius, nisi sit amet posuere dictum, dolor libero ullamcorper odio, vitae fringilla diam ipsum id lectus. Maecenas vestibulum ipsum lectus, pulvinar sagittis velit vulputate ut.\n\nIn aliquam auctor vestibulum. Pellentesque lobortis sem orci, nec mattis orci convallis eu. In congue, odio nec vulputate semper, ipsum lorem accumsan mi, ac aliquet elit justo ac massa. Aliquam vitae consectetur sem. Ut cursus a arcu id placerat. Etiam consectetur nisl in vehicula vestibulum. Vestibulum quis erat neque. Cras vitae imperdiet erat. Phasellus semper, massa sit amet elementum ultrices, est mi consectetur elit, in mattis dolor purus non erat. Aenean lacinia nisi et elit dignissim, sit amet tincidunt ex gravida.\n\nDuis nec porttitor orci, ac imperdiet lacus. Sed ut libero lorem. Nunc condimentum eget lectus nec blandit. Sed sem libero, tempus in elementum vel, ullamcorper a sapien. Morbi vitae quam id dui maximus tincidunt. Aenean congue lectus nec dictum maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas a semper massa. In molestie quam velit, non suscipit dolor ultrices ut. Integer ultricies dolor urna, quis mollis ipsum dapibus luctus.\n\nVivamus rutrum tincidunt felis, eu vulputate turpis blandit ut. Nullam id purus odio. Integer et aliquet mauris, sit amet laoreet risus. Curabitur at ante vel nunc dignissim suscipit ac in lacus. Praesent ac ipsum vitae orci euismod aliquam. Nulla blandit gravida urna, nec pharetra nulla venenatis ac. Donec dapibus justo sed lorem sagittis volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas sollicitudin ipsum eu erat consequat eleifend. Nulla faucibus enim id mi accumsan, nec dignissim risus pulvinar. Aliquam vehicula varius euismod. Nunc suscipit ex libero. Cras faucibus magna a commodo cursus. Vestibulum felis diam, convallis a consequat eu, tincidunt sed eros. Nam fermentum, turpis id cursus sagittis, nunc sapien vulputate nulla, ac condimentum eros tellus et arcu. Donec magna est, rhoncus vel eros quis, finibus pretium tortor.\n\nMorbi rutrum, eros tincidunt convallis finibus, risus arcu scelerisque ipsum, in dapibus lorem elit fermentum dolor. Nullam vitae tempus magna, vel consequat magna. Sed ex risus, dictum vitae malesuada quis, malesuada nec felis. Mauris finibus scelerisque justo, eu lacinia augue accumsan at. Pellentesque scelerisque, massa aliquam vulputate fringilla, sem urna fermentum risus, ac mollis nulla nisi eget velit. Aliquam eget mi eleifend, volutpat metus vel, ullamcorper nulla. Ut sagittis augue ac enim dictum molestie. Phasellus sed libero eu nulla sagittis aliquam. Donec vitae mauris eu erat vulputate vulputate id eu turpis. Sed porta consectetur rutrum. In hac habitasse platea dictumst. Curabitur euismod pulvinar lacus, sit amet lacinia augue convallis id. Praesent faucibus massa urna, vel varius mauris tincidunt eget. Nunc lobortis, sapien sed commodo vestibulum, risus nisl efficitur mi, at porttitor elit nibh eget tellus. Nam commodo est ac mauris lobortis, et aliquet diam porta. Mauris fermentum nunc et risus efficitur, non tincidunt ante ultrices.\n\nSed ornare pulvinar nisl, vitae cursus nisl venenatis eget. Maecenas tincidunt, dolor mollis pharetra pharetra, mi felis convallis ex, eget ultricies tellus nisi vel magna. Proin sagittis dui id eros scelerisque, a suscipit nulla condimentum. In dictum tortor fringilla est aliquam, tincidunt auctor enim vestibulum. Mauris eget diam vehicula, mattis lorem vel, ultricies tellus. Etiam finibus sapien ut posuere finibus. Duis congue tincidunt lacus in varius. Nullam a urna id erat viverra mollis non id mi. Nunc sit amet tortor felis. Nullam imperdiet eu est eget convallis. Nullam interdum risus a lobortis congue. Etiam condimentum augue id dolor euismod tempor. Praesent ac porta diam, vel facilisis arcu. Suspendisse sed sapien ac velit tristique elementum. Sed quis semper risus. Nunc in nisl orci.\n\nDonec rutrum risus augue, quis molestie sem porta sit amet. Donec nec leo vel nulla malesuada interdum. Curabitur et tincidunt diam. Vivamus ac aliquam augue. In varius aliquam quam. Maecenas nisl velit, congue eget nibh ac, gravida dapibus dolor. In hac habitasse platea dictumst. Phasellus mauris turpis, maximus quis nulla sit amet, vehicula bibendum justo. Quisque eu eleifend nibh. Fusce quis scelerisque elit, ut mollis quam. Nam tortor enim, semper finibus lectus sit amet, lobortis mattis elit. Sed dignissim vel lorem non aliquam. Aenean a tristique dui. Praesent et finibus lectus.\n\nMaecenas egestas lobortis imperdiet. Ut velit augue, varius id suscipit nec, iaculis a ipsum. Nullam ultricies luctus rutrum. Phasellus vulputate, neque sit amet tempus dapibus, augue tortor sodales dui, vel convallis libero purus a felis. In quis rhoncus justo, at pharetra metus. Maecenas aliquet aliquet neque et bibendum. Mauris felis nunc, aliquam ac felis ac, fermentum venenatis risus. Curabitur dolor tortor, blandit at rhoncus ac, facilisis non lorem. Etiam finibus semper tortor, nec sollicitudin dolor porta at. Nunc eget arcu tincidunt, eleifend nibh a, venenatis ligula.\n\nMaecenas porta diam at dictum tincidunt. Duis fringilla neque ut lectus fringilla, eget consequat ex ullamcorper. Quisque eu justo ut elit convallis vulputate in sit amet diam. Curabitur consectetur vitae magna vel egestas. Donec at ex felis. In metus ipsum, porttitor ut mauris non, gravida ultrices eros. Praesent lacus diam, dictum nec fringilla a, euismod a tellus. Pellentesque eget vulputate justo. Fusce nec commodo quam, sed suscipit lectus. Mauris quis molestie diam. Etiam nibh libero, pulvinar quis auctor placerat, fringilla at lorem. Mauris id dictum ante. Pellentesque fermentum risus diam. Nullam in nunc id nulla porta dignissim.\n\nAenean tempus ex mi, a lacinia justo efficitur sed. Integer ultrices sollicitudin dolor in consequat. In malesuada dapibus tempus. Vestibulum id nibh eu metus laoreet feugiat vel in elit. Vestibulum arcu sem, bibendum nec nisl nec, tincidunt porttitor neque. Sed ac laoreet enim. Quisque dictum sapien a maximus malesuada. Donec posuere pharetra dui, nec maximus ex mattis sed.\n\nFusce sit amet magna gravida, elementum nunc vel, ultricies felis. Cras a nisl mollis, blandit lacus eget, pretium elit. Donec a metus eget dolor ullamcorper maximus. Ut eleifend mi et metus fermentum tristique. In lacinia condimentum nisi, semper finibus dui ultrices efficitur. Quisque bibendum purus tempor, elementum eros ut, gravida tortor. Nulla posuere nisi at massa commodo interdum eu et eros. Proin commodo accumsan magna et rhoncus.\n\nSuspendisse laoreet odio nec sagittis hendrerit. Etiam convallis risus sit amet purus egestas scelerisque. Integer vestibulum et sem quis facilisis. Curabitur tempor condimentum libero, id sollicitudin nisi tempus eu. Sed lorem eros, lacinia in quam eget, venenatis sagittis diam. Aenean vitae molestie sapien. Quisque turpis massa, interdum sit amet scelerisque ac, luctus feugiat arcu. Ut sollicitudin viverra ex eget eleifend. Suspendisse cursus bibendum magna. Duis viverra sapien id ullamcorper posuere. Phasellus luctus sapien in justo facilisis, in ullamcorper massa placerat.\n\nCras ut sollicitudin massa. Pellentesque lobortis maximus justo eu feugiat. Donec vel eleifend ligula, a faucibus turpis. Nullam non turpis velit. Nunc condimentum enim purus, ut commodo lectus tempus id. Proin venenatis aliquet ipsum, tempor pharetra erat rhoncus vitae. Sed purus sapien, egestas nec arcu in, dapibus hendrerit neque. Vivamus sagittis odio arcu, id placerat tellus pellentesque ac. Pellentesque enim tellus, tincidunt suscipit luctus sit amet, tristique eu arcu. Vivamus consectetur ipsum sit amet augue tempor, et vehicula sem maximus. Nullam at ultricies lacus, a interdum purus. Aenean a enim quam. Nullam dapibus lorem leo, nec varius turpis tincidunt sit amet. Phasellus eget luctus ipsum, quis blandit felis. Pellentesque ante enim, vestibulum at malesuada eget, viverra in nulla.\n\nPhasellus aliquet gravida arcu sed ornare. Sed gravida mi in porttitor egestas. Proin ornare nibh et tellus consequat sagittis. Nulla quis pharetra massa, eu tincidunt massa. Sed imperdiet lectus in justo consectetur posuere. Proin vel massa urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut tincidunt convallis tortor, sed aliquam tellus commodo ac. Maecenas non laoreet metus.\n\nCurabitur sit amet pretium lacus. Aliquam erat volutpat. In facilisis scelerisque nulla, at semper ipsum cursus non. Maecenas et nisi turpis. Vestibulum malesuada iaculis varius. Ut interdum dapibus lacus, vel aliquet mi pellentesque nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas blandit auctor sodales. Nulla massa sem, condimentum non maximus in, elementum non diam. Praesent volutpat urna ac justo vehicula molestie. Morbi euismod mauris orci, non pharetra velit finibus a.\n\nMorbi vitae mi a ante malesuada mattis. Maecenas iaculis condimentum augue, a gravida felis suscipit fringilla. Morbi pharetra, est eu malesuada cursus, nunc eros elementum lectus, sit amet dapibus leo arcu aliquam magna. Suspendisse in dignissim lorem. Nunc nec felis facilisis, egestas est id, eleifend nulla. Phasellus posuere id enim eget iaculis. Phasellus eu est accumsan arcu facilisis elementum eu sed velit. Suspendisse rhoncus libero id lectus porttitor posuere. Sed fringilla mauris libero, eget scelerisque massa auctor ac. Vestibulum viverra a erat in luctus. Praesent blandit leo sit amet ipsum tincidunt elementum. Morbi suscipit ante et augue porttitor malesuada. In ullamcorper pretium lobortis.\n\nNunc tincidunt maximus est, et dignissim tellus dictum posuere. Donec convallis urna quis turpis vestibulum, sit amet fringilla est cursus. Nam volutpat molestie augue, non fermentum lorem vehicula eget. Cras malesuada molestie odio viverra molestie. Aliquam erat volutpat. Curabitur pellentesque fringilla sapien ac cursus. Vivamus nec tincidunt dolor, at luctus turpis. Donec quis imperdiet risus. Etiam ac porta enim, et tincidunt elit. Donec tempus tortor quam, eget scelerisque enim pellentesque ac. Nunc sed tortor faucibus, consectetur tortor ac, feugiat dui. Etiam ac ligula eu dolor sodales feugiat. Integer vel mattis libero. Sed feugiat sodales eros. Morbi malesuada semper eros, a sodales est tempor tincidunt. Nam et sapien euismod, sodales lectus nec, condimentum ligula.\n\nMaecenas vel dui nec felis efficitur egestas ut malesuada turpis. Integer eu porta arcu. Morbi ultrices risus vitae est consectetur condimentum. Mauris venenatis odio id neque faucibus vehicula. Ut non mollis ex. Vivamus viverra convallis quam, et sodales felis laoreet nec. Nulla eget metus ac leo gravida mollis. Phasellus maximus fermentum nisl at egestas. Donec porta diam lacus, in cursus massa auctor id. Phasellus purus orci, eleifend in semper nec, faucibus vel nunc. Sed vulputate nisl malesuada, efficitur metus eu, mollis mi. Cras vitae rhoncus ante, ut pharetra ante. Proin porttitor ex vitae erat facilisis vehicula. Suspendisse in feugiat est, nec ornare orci. Suspendisse eu dolor ut dui vestibulum maximus ac sed purus.\n\nPraesent quis ornare erat. Curabitur dui velit, maximus at risus tristique, convallis aliquam felis. In interdum metus tellus, nec tincidunt orci ullamcorper non. Aliquam suscipit egestas elementum. Proin porta rhoncus pharetra. Maecenas eu convallis enim, eu pretium odio. Donec iaculis tellus vitae odio convallis, sit amet gravida velit consectetur.\n\nIn porttitor, lectus nec fringilla auctor, sapien urna gravida lacus, eget accumsan augue sapien cursus est. Donec accumsan dolor at nisi condimentum, et congue massa fermentum. Ut massa magna, varius nec scelerisque et, sodales vitae velit. In eu egestas neque. Mauris orci lectus, fermentum at tortor sit amet, laoreet luctus sed.";


describe('SCON Encoder', function() {
    it('encodes an empty object as a single EOO byte when magic numbers are explicitly disabled', function(){
        expect(
            scon.encode({}, {useMagicNumber:false})
        ).to.deep.equal(Buffer.from([
            0x00 // End of Object
        ]));
    });
    it('prepends the magic number when explicitly specified', function(){
        expect(
            scon.encode({}, {useMagicNumber:true})
        ).to.deep.equal(Buffer.from([
            0x07, // Ding!
            0x53, // S
            0x43, // C
            0x32, // 2
            0x00 // End of Object
        ]));
    });
    it("prepends the magic number by default", function(){
        expect(
            scon.encode({})
        ).to.deep.equal(Buffer.from([
            0x07, // Ding!
            0x53, // S
            0x43, // C
            0x32, // 2
            0x00 // End of Object
		]));
        expect(
            scon.encode({},{})
        ).to.deep.equal(Buffer.from([
            0x07, // Ding!
            0x53, // S
            0x43, // C
            0x32, // 2
            0x00 // End of Object
        ]));
    });
    it("prepends the magic number with legacy boolean argument", function(){
        expect(
            scon.encode({}, false)
        ).to.deep.equal(Buffer.from([
            0x00 // End of Object
        ]));
        expect(
            scon.encode({}, true)
        ).to.deep.equal(Buffer.from([
            0x07, // Ding!
            0x53, // S
            0x43, // C
            0x32, // 2
            0x00 // End of Object
        ]));
	});
    it("encodes nested objects", function(){
        expect(
            scon.encode({value:{}}, noMagicNumber)
        ).to.deep.equal(Buffer.from([
            0x02 | 0x80, // type=compound with "Short key name length" modifier
            5, // "value" has 5 chars
            0x76, // "v"
            0x61, // "a"
            0x6c, // "l"
            0x75, // "u"
            0x65, // "e"
			0x00, // End of nested Object
			0x00 // End of root Object
        ]));
    });
    it("encodes null", function(){
        expect(
            scon.encode({value:null}, noMagicNumber)
        ).to.deep.equal(Buffer.from([
            0x09 | 0x80, // type=null with "Short key name length" modifier
            5, // "value" has 5 chars
            0x76, // "v"
            0x61, // "a"
            0x6c, // "l"
            0x75, // "u"
            0x65, // "e"
            0x00 // End of Object
        ]));
	});
    it("encodes nested objects with a value in it", function(){
        expect(
            scon.encode({value:{value:null}}, noMagicNumber)
        ).to.deep.equal(Buffer.from([
            0x02 | 0x80, // type=compound with "Short key name length" modifier
            5, // "value" has 5 chars
            0x76, // "v"
            0x61, // "a"
            0x6c, // "l"
            0x75, // "u"
			0x65, // "e"
            0x09 | 0x80, // type=null with "Short key name length" modifier
            5, // "value" has 5 chars
            0x76, // "v"
            0x61, // "a"
            0x6c, // "l"
            0x75, // "u"
            0x65, // "e"
			0x00, // End of nested Object
			0x00 // End of root Object
        ]));
    });

    it("complains when key starts with \\0", function(){
        expect(() => {
            scon.encode({"\0haha":null}, noMagicNumber)
        }).to.throw(scon.Error);
    });

    it("encodes object keys longer than 255 bytes", function(){

        let objectToEncode = {};
        objectToEncode[testString16] = null;
        expect(
            scon.encode(objectToEncode, noMagicNumber)
        ).to.deep.equal(
            Buffer.concat([
                Buffer.from([
                    0x09, // type=null
                    testString16.length >>> 8, // key length in BE
                    testString16.length,
                ]),
                Buffer.from(testString16, "utf8"), // If you think I'm writing the chars here, you're insane.
                Buffer.from([
                    0x00 // End of Object
                ])
            ])
        );
    });

    it("complains when key is larger than 65535 bytes long", function(){
        expect(() => {
            scon.encode({[testString24]:null}, noMagicNumber)
        }).to.throw(scon.Error);
    });

    it("encodes booleans", function(){
        expect(
            scon.encode({f: false}, noMagicNumber)
        ).to.deep.equal(Buffer.from([
            0x0a | 0x80, // type=boolFalse with "Short key name length" modifier
            1, // "f" has 1 char
            0x66, // "f"
            0x00 // End of Object
        ]));
        expect(
            scon.encode({t: true}, noMagicNumber)
        ).to.deep.equal(Buffer.from([
            0x0b | 0x80, // type=boolTrue with "Short key name length" modifier
            1, // "t" has 1 char
            0x74, // "t"
            0x00 // End of Object
        ]));
	});
	
    it("doesn't encode symbols", function(){
        expect(() => {
			scon.encode({v: Symbol("aaaaaa")}, noMagicNumber);
		}).to.throw();
	});
    it("doesn't encode functions", function(){
        expect(() => {
			scon.encode({v: Function.prototype}, noMagicNumber);
		}).to.throw();
	});
    it("doesn't encode BigInts (yet)", function(){
        expect(() => {
			scon.encode({v: 1337n}, noMagicNumber);
		}).to.throw();
    });
    it("encodes NaN as its own data type", function(){
        expect(
            scon.encode({v: NaN}, noMagicNumber)
        ).to.deep.equal(Buffer.from([
            0x0d | 0x80, // type=NaN with "Short key name length" modifier
            1, // "v" has 1 char
            0x76, // "v"
            0x00 // End of Object
        ]));
    });
    it("encodes infinity as its own data type", function(){
        expect(
            scon.encode({v: Infinity}, noMagicNumber)
        ).to.deep.equal(Buffer.from([
            0x0e | 0x80, // type=floatInfinity with "Short key name length" modifier
            1, // "v" has 1 char
            0x76, // "v"
            0x00 // End of Object
        ]));
    });
    it("encodes negative infinity as its own data type", function(){
        expect(
            scon.encode({v: -Infinity}, noMagicNumber)
        ).to.deep.equal(Buffer.from([
            0x0f | 0x80, // type=floatNegativeInfinity with "Short key name length" modifier
            1, // "v" has 1 char
            0x76, // "v"
            0x00 // End of Object
        ]));
    });
    it("encodes JavaScript numbers as Float64 (BE)", function(){
        expect(
            scon.encode({v: 3.141592653589793}, noMagicNumber)
        ).to.deep.equal(Buffer.from([
            0x11 | 0x80, // type=float64 with "Short key name length" modifier
            1, // "v" has 1 char
            0x76, // "v"
            0x40, // 3.141592653589793 represented by a float64 in BE
            0x09,
            0x21,
            0xfb,
            0x54,
            0x44,
            0x2d,
            0x18,
            0x00 // End of Object
        ]));
    });
    it("encodes positive numbers without decimals as uint", function(){
        expect(
            scon.encode({v: 0}, noMagicNumber)
        ).to.deep.equal(Buffer.from([
            0x12 | 0x80, // type=uint0 with "Short key name length" modifier
            1, // "v" has 1 char
            0x76, // "v"
            0x00 // End of Object
        ]));

        // 1 bytes
        expect(
            scon.encode({v: 86}, noMagicNumber)
        ).to.deep.equal(Buffer.from([
            0x13 | 0x80, // type=uint8 with "Short key name length" modifier
            1, // "v" has 1 char
            0x76, // "v"
            0x56,
            0x00 // End of Object
        ]));
        // 2 bytes
        expect(
            scon.encode({v: 18581}, noMagicNumber)
        ).to.deep.equal(Buffer.from([
            0x14 | 0x80, // type=uint16 with "Short key name length" modifier
            1, // "v" has 1 char
            0x76, // "v"
            0x48,
            0x95,
            0x00 // End of Object
        ]));
        // 3 bytes
        expect(
            scon.encode({v: 2398544}, noMagicNumber)
        ).to.deep.equal(Buffer.from([
            0x15 | 0x80, // type=uint24 with "Short key name length" modifier
            1, // "v" has 1 char
            0x76, // "v"
            0x24,
            0x99,
            0x50,
            0x00 // End of Object
        ]));
        // 4 bytes
        expect(
            scon.encode({v: 801598151}, noMagicNumber)
        ).to.deep.equal(Buffer.from([
            0x16 | 0x80, // type=uint32 with "Short key name length" modifier
            1, // "v" has 1 char
            0x76, // "v"
            0x2f,
            0xc7,
            0x6a,
            0xc7,
            0x00 // End of Object
        ]));
        // 5 bytes
        expect(
            scon.encode({v: 985993533415}, noMagicNumber)
        ).to.deep.equal(Buffer.from([
            0x17 | 0x80, // type=uint40 with "Short key name length" modifier
            1, // "v" has 1 char
            0x76, // "v"
            0xe5,
            0x91,
            0xcb,
            0x57,
            0xe7,
            0x00 // End of Object
        ]));
        // 6 bytes
        expect(
            scon.encode({v: 84325661136686}, noMagicNumber)
        ).to.deep.equal(Buffer.from([
            0x18 | 0x80, // type=uint48 with "Short key name length" modifier
            1, // "v" has 1 char
            0x76, // "v"
            0x4c,
            0xb1,
            0x99,
            0x13,
            0xd7,
            0x2e,
            0x00 // End of Object
        ]));

        // Make sure they are Uints and not signed ints

        // 1 bytes
        expect(
            scon.encode({v: 255}, noMagicNumber)
        ).to.deep.equal(Buffer.from([
            0x13 | 0x80, // type=uint8 with "Short key name length" modifier
            1, // "v" has 1 char
            0x76, // "v"
            0xff,
            0x00 // End of Object
        ]));
        // 2 bytes
        expect(
            scon.encode({v: 65535}, noMagicNumber)
        ).to.deep.equal(Buffer.from([
            0x14 | 0x80, // type=uint16 with "Short key name length" modifier
            1, // "v" has 1 char
            0x76, // "v"
            0xff,
            0xff,
            0x00 // End of Object
        ]));
        // 3 bytes
        expect(
            scon.encode({v: 16777215}, noMagicNumber)
        ).to.deep.equal(Buffer.from([
            0x15 | 0x80, // type=uint24 with "Short key name length" modifier
            1, // "v" has 1 char
            0x76, // "v"
            0xff,
            0xff,
            0xff,
            0x00 // End of Object
        ]));
        // 4 bytes
        expect(
            scon.encode({v: 4294967295}, noMagicNumber)
        ).to.deep.equal(Buffer.from([
            0x16 | 0x80, // type=uint32 with "Short key name length" modifier
            1, // "v" has 1 char
            0x76, // "v"
            0xff,
            0xff,
            0xff,
            0xff,
            0x00 // End of Object
        ]));
        // 5 bytes
        expect(
            scon.encode({v: 1099511627775}, noMagicNumber)
        ).to.deep.equal(Buffer.from([
            0x17 | 0x80, // type=uint40 with "Short key name length" modifier
            1, // "v" has 1 char
            0x76, // "v"
            0xff,
            0xff,
            0xff,
            0xff,
            0xff,
            0x00 // End of Object
        ]));
        // 6 bytes
        expect(
            scon.encode({v: 281474976710655}, noMagicNumber)
        ).to.deep.equal(Buffer.from([
            0x18 | 0x80, // type=uint48 with "Short key name length" modifier
            1, // "v" has 1 char
            0x76, // "v"
            0xff,
            0xff,
            0xff,
            0xff,
            0xff,
            0xff,
            0x00 // End of Object
        ]));
    });

    it("encodes negative numbers without decimals as signed int", function(){
        expect(
            scon.encode({v: -86}, noMagicNumber)
        ).to.deep.equal(Buffer.from([
            0x1c | 0x80, // type=int8 with "Short key name length" modifier
            1, // "v" has 1 char
            0x76, // "v"
            0xaa,
            0x00 // End of Object
        ]));
        // 2 bytes
        expect(
            scon.encode({v: -18581}, noMagicNumber)
        ).to.deep.equal(Buffer.from([
            0x1d | 0x80, // type=int16 with "Short key name length" modifier
            1, // "v" has 1 char
            0x76, // "v"
            0xb7,
            0x6b,
            0x00 // End of Object
        ]));
        // 3 bytes
        expect(
            scon.encode({v: -2398544}, noMagicNumber)
        ).to.deep.equal(Buffer.from([
            0x1e | 0x80, // type=int24 with "Short key name length" modifier
            1, // "v" has 1 char
            0x76, // "v"
            0xdb,
            0x66,
            0xb0,
            0x00 // End of Object
        ]));
        // 4 bytes
        expect(
            scon.encode({v: -801598151}, noMagicNumber)
        ).to.deep.equal(Buffer.from([
            0x1f | 0x80, // type=int32 with "Short key name length" modifier
            1, // "v" has 1 char
            0x76, // "v"
            0xd0,
            0x38,
            0x95,
            0x39,
            0x00 // End of Object
        ]));
        // 5 bytes
        expect(
            scon.encode({v: -549755813888}, noMagicNumber)
        ).to.deep.equal(Buffer.from([
            0x20 | 0x80, // type=int40 with "Short key name length" modifier
            1, // "v" has 1 char
            0x76, // "v"
            0x80,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00 // End of Object
        ]));
        // 6 bytes
        expect(
            scon.encode({v: -84325661136686}, noMagicNumber)
        ).to.deep.equal(Buffer.from([
            0x21 | 0x80, // type=int48 with "Short key name length" modifier
            1, // "v" has 1 char
            0x76, // "v"
            0xb3,
            0x4e,
            0x66,
            0xec,
            0x28,
            0xd2,
            0x00 // End of Object
        ]));
    });
    it("falls back to using a float64 if the number is outside the range of a uint48", function(){
        expect(
            scon.encode({v: 281474976710660}, noMagicNumber)
        ).to.deep.equal(Buffer.from([
            0x11 | 0x80, // type=float64 with "Short key name length" modifier
            1, // "v" has 1 char
            0x76, // "v"
            0x42, // 281474976710660
            0xf0,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x40,
            0x00 // End of Object
        ]));
    });
    it("falls back to using a float64 if the number is outside the range of a int48", function(){
        expect(
            scon.encode({v: -281474976710660}, noMagicNumber)
        ).to.deep.equal(Buffer.from([
            0x11 | 0x80, // type=float64 with "Short key name length" modifier
            1, // "v" has 1 char
            0x76, // "v"
            0xc2, // -281474976710660
            0xf0,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x40,
            0x00 // End of Object
        ]));
    });
    it("encodes strings as utf8", function(){
        expect(
            scon.encode({v: ""}, noMagicNumber)
        ).to.deep.equal(Buffer.from([
            0x24 | 0x80, // type=utf8String0 with "Short key name length" modifier
            1, // "v" has 1 char
            0x76, // "v"
            0x00 // End of Object
        ]));
        expect(
            scon.encode({v: testString8}, noMagicNumber)
        ).to.deep.equal(Buffer.concat([
            Buffer.from([
                0x25 | 0x80, // type=utf8String8 with "Short key name length" modifier
                1, // "v" has 1 char
                0x76, // "v"
                testString8.length
            ]),
            Buffer.from(testString8),
            Buffer.from([0x00]) // End of Object
        ]));
        expect(
            scon.encode({v: testString16}, noMagicNumber)
        ).to.deep.equal(Buffer.concat([
            Buffer.from([
                0x26 | 0x80, // type=utf8String16 with "Short key name length" modifier
                1, // "v" has 1 char
                0x76, // "v"
                testString16.length >>> 8,
                testString16.length
            ]),
            Buffer.from(testString16),
            Buffer.from([0x00]) // End of Object
        ]));
        expect(
            scon.encode({v: testString24}, noMagicNumber)
        ).to.deep.equal(Buffer.concat([
            Buffer.from([
                0x27 | 0x80, // type=utf8String24 with "Short key name length" modifier
                1, // "v" has 1 char
                0x76, // "v"
                testString24.length >>> 16,
                testString24.length >>> 8,
                testString24.length
            ]),
            Buffer.from(testString24),
            Buffer.from([0x00]) // End of Object
        ]));
    });
    it("encodes arrays with arbitrary types, including undefined", function(){
        expect(
            scon.encode({v:[
                1,
                2,
                true,
                "hi",
                , // Undefined
                []
            ]}, noMagicNumber)
        ).to.deep.equal(Buffer.from([
            0x2e | 0x80, // type=array8 with "Short key name length" modifier
            1, // "v" has 1 char
            0x76, // "v"
            6, // Array has 6 elements (Start of Array)
            0x13, // [0].type=uint8
            1,
            0x13, // [1].type=uint8
            2,
            0x0b, // [2].type=boolTrue
            0x25, // [3].type=utf8String8
            2, // "hi" has 2 chars
            0x68, // "h"
            0x69, // "i"
            0x08, // [4].type=undefined
            0x2d, // [5].type=emptyArray
            0x00 // End of Object
        ]));
    });
    
    it("encodes buffers verbatim", function(){
        const testBuffer = randomBytes(30);
        expect(
            scon.encode({v:testBuffer},noMagicNumber)
        ).to.deep.equal(Buffer.concat([
            Buffer.from([
                0x37 | 0x80, // type=array8 with "Short key name length" modifier
                1, // "v" has 1 char
				0x76, // "v"
				testBuffer.length
			]),
			testBuffer,
			Buffer.from([0x00]) // end of object

        ]))
    });
	
	it("reuses both string keys and string values when noDupeStrings is enabled", function(){
		expect(
			scon.encode({value:"value"}, {useMagicNumber:false, noDupeStrings:true})
		).to.deep.equal(Buffer.from([
            0x04 | 0x80, // type=referencedKey with "Short key name length" modifier
            5, // "value" has 5 chars
            0x76, // "v"
            0x61, // "a"
            0x6c, // "l"
            0x75, // "u"
			0x65, // "e"
			0x40 | 0x80, // type=pointer8 with "Short key name length" modifier
			2, // key length
			0x00, // a key starting with \0 means that it's a pointer to a string
			0x01, // pointer to the key
			0x01, // pointer to the value 
			0x00 // end of object
		]));
		expect(
			scon.encode({value:{value:"value"}}, {useMagicNumber:false, noDupeStrings:true})
		).to.deep.equal(Buffer.from([
            0x04 | 0x80, // type=referencedKey with "Short key name length" modifier
            5, // "value" has 5 chars
            0x76, // "v"
            0x61, // "a"
            0x6c, // "l"
            0x75, // "u"
			0x65, // "e"
			0x02 | 0x80, // type=compound with "Short key name length" modifier
			2, // key length
			0x00, // a key starting with \0 means that it's a pointer to a string
			0x01, // pointer to the key
			// Start of nested object
			0x40 | 0x80, // type=pointer8 with "Short key name length" modifier
			2, // key length
			0x00, // a key starting with \0 means that it's a pointer to a string
			0x01, // pointer to the key
			0x01, // pointer to the value 
			0x00, // end nested of object
			0x00 // end of root object
		]));
		expect(
			scon.encode({[testString16]:{[testString16]:true}}, {useMagicNumber:false, noDupeStrings:true})
		).to.deep.equal(Buffer.concat([
			Buffer.from([
				0x04, // type=referencedKey
                testString16.length >>> 8,
                testString16.length
			]),
			Buffer.from(testString16),
			Buffer.from([
				0x02 | 0x80, // type=compound with "Short key name length" modifier
				2, // key length
				0x00, // a key starting with \0 means that it's a pointer to a string
				0x01, // pointer to the key
				// Start of nested object
				0x0b | 0x80, // type=boolTrue with "Short key name length" modifier
				2, // key length
				0x00, // a key starting with \0 means that it's a pointer to a string
				0x01, // pointer to the key
				0x00, // end nested of object
				0x00 // end of root object
			])
		]));
	});

	it("doesn't use pointers for very short strings", function(){
		expect(
            scon.encode({v: "v"}, {useMagicNumber:false, noDupeStrings:true})
        ).to.deep.equal( Buffer.from([
			0x25 | 0x80, // type=utf8String8 with "Short key name length" modifier
			1, // "v" has 1 char
			0x76, // "v"
			1, // "v" has 1 char
			0x76, // "v"
			0x00 // End of Object
		]));
	});

	it("encodes longer strings as a referencedValue instead of referencedKey", function(){
		expect(
			// Using an array to test because they encode very predictibly
			scon.encode({v: [testString24, testString24]}, {useMagicNumber:false, noDupeStrings:true})
		).to.deep.equal(Buffer.concat([
			Buffer.from([
				0x05, // type=referencedValue
                0x27, // type=utf8String24 
                testString24.length >>> 16,
                testString24.length >>> 8,
                testString24.length
			]),
			Buffer.from(testString24),
			Buffer.from([
				0x2e | 0x80, // type=array8 with "Short key name length" modifier
				1, // "v" has 1 char
				0x76, // "v"
				2, // Array has 2 elements (Start of Array)
				0x40, // type=pointer8
				0x01, // Point to the string
				0x40, // type=pointer8
				0x01, // Point to the string
				0x00 // End of Object
			])
		]));
	});
	it("always stores referencedKeys before referencedValues, regardless of when the data is encountered", function(){
		expect(
			scon.encode({v:[testString24, testString24, "value", "value"]}, {useMagicNumber:false, noDupeStrings:true})
		).to.deep.equal(Buffer.concat([
            Buffer.from([
                0x04 | 0x80, // type=referencedKey with "Short key name length" modifier
                5, // "value" has 5 chars
                0x76, // "v"
                0x61, // "a"
                0x6c, // "l"
                0x75, // "u"
                0x65, // "e"
                0x05, // type=referencedValue
				0x27, // type=utf8String24 
				testString24.length >>> 16,
				testString24.length >>> 8,
				testString24.length
			]),
			Buffer.from(testString24),
			Buffer.from([
                0x2e | 0x80, // type=array8 with "Short key name length" modifier
                1, // "v" has 1 char
                0x76, // "v"
                4, // Array has 4 elements (Start of Array)
                0x40, // type=pointer8
                0x02, // Point to the long string
                0x40, // type=pointer8
                0x02, // Point to the long string
                0x40, // type=pointer8
                0x01, // Point to the short string
                0x40, // type=pointer8
                0x01, // Point to the short string
                0x00 // end of object
            ])
        
		]));
	});
	it("encodes circular objects", function(){
		let rootObject = {};
		rootObject.v = rootObject;
		expect(
			scon.encode(rootObject, {useMagicNumber: false, circularObjects: true})
		).to.deep.equal(Buffer.from([
			0x3f | 0x80, // type=pointer0 with "Short key name length" modifier
			1, // key length
			0x76, // "v"
			0x00 // end of root compound
		]));

		rootObject = {v:{}};
		rootObject.v.v = rootObject.v;
		
		expect(
			scon.encode(rootObject, {useMagicNumber: false, circularObjects: true})
		).to.deep.equal(Buffer.from([
			0x05, // type=referencedValue
			0x02, // type=compund 
			0x40 | 0x80, // type=pointer8 with "Short key name length" modifier
			1, // key length
			0x76, // "v"
			0x01, // Point to the referenced compound
			0x00, // end of referenced compound
			0x40 | 0x80, // type=pointer8 with "Short key name length" modifier
			1, // key length
			0x76, // "v"
			0x01, // Point to the referenced compound
			0x00 // end of root compound
		]));
    });
	it("uses references with buffers when circularObjects are enabled", function(){
		const testBuffer = randomBytes(30);
		expect(
			// Using an array to test because they encode very predictibly
			scon.encode({v: testBuffer}, {useMagicNumber:false, circularObjects: true})
		).to.deep.equal(Buffer.concat([
			Buffer.from([
				0x05, // type=referencedValue
                0x37, // type=string8
                testBuffer.length
			]),
			Buffer.from(testBuffer),
			Buffer.from([
				0x40 | 0x80, // type=pointer8 with "Short key name length" modifier
				1, // "v" has 1 char
				0x76, // "v"
				0x01, // Point to the buffer
				0x00 // End of Object
			])
		]));
	});
	it("uses references with arrays when circularObjects are enabled", function(){
		expect(
			// Using an array to test because they encode very predictibly
			scon.encode({v: []}, {useMagicNumber:false, circularObjects: true})
		).to.deep.equal(Buffer.from([
			0x05, // type=referencedValue
			0x2d, // empty array
			0x40 | 0x80, // type=pointer8 with "Short key name length" modifier
			1, // "v" has 1 char
			0x76, // "v"
			0x01, // Point to the array
			0x00 // End of Object
		]));
	});
});
var to = 'Honey 😺❤️';
var gift_url = 'http://www.amazon.com/gp/product/B00X4WHP5E/ref=ods_xs_ae_shurl?tag=googhydr-20&hvadid=74652194316&hvpos=1t1&hvexid=&hvnetw=g&hvrand=7560558939874219351&hvpone=&hvptwo=&hvqmt=b&hvdev=c&ref=pd_sl_2vatdqwe3p_b';
var gift_image_url = 'https://www.intouchsol.com/Content/Libraries//echo-blog-body.png';



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");

var ans = ["1", "2", "3", "4", "5", "6", "7"];
var reviews_name = ["Thomas", 'Agasi', 'Bhavi', 'kalpesh', 'Vikas', 'Navin', 'Anchal'];
var reviews = [
  `To the first senior I interacted in this college, 

  Yes, Honey and pooja, second floor GCR, you both were the first one  remember asking you "Aap MB pe the na ?" 
  And I even remember that you yourself came to me asking "notes hain aapke paas, padhoge kahase?" 
  From then until now, you have been there each time, you have completely justified the statement "just a call away"
  Though we dont talk on regular basis, but I know if I am stuck somewhere, there is someone who will listen to me and help me out. From notes and books to issues with teachers to giving tips  for  last minute revision, Thankyou so much ❤️
  And only I can be your favourite junior 😂😂
   (That is mandatory. No choices given)
  Apki zindagi ka khup vikas ho !!😝
  Keep smiling. Stay happy. Meet soon 
  And yes, MANY MANY HAPPY RETURNS OF THE DAY ❤️`,
  `Hey there !!  Sending your  way birthday wishes for a beautiful year ahead.
  May your lucky stars continue to shine and make all your dreams come true . Enjoy your day with all the pleasures it has in store❣️`,
  `Ok..so this message is for the girl who annoys me the most😂😂 but loves me like no one else did..🥰
  Duniya ke liye tu honey rahegi lkn mere liye to tu vahi heenaa nibbi hi rahegi..🥱
  Bachpan me ghar ghar👫 khelne se lekr aaj apne apne ghar pe baith kr ludo khelne tak kaise time beet gaya pata hi nahi chala..😌
  Mama ke sath vihoneyree ghoomne😂 se lkr aaj TFT🤤 chalne tak kaise humari itni saari memories ban gayi ki pata hi nahi chala..
  Pagli aisi hi bahut memories banani hai aur bhi isliye jaldi mil aur party de..kal aa raha hu tere ghar mein cake sambhal ke rakhna😂🤭
  
  Wishing you the happiest and most joyful Birthday Darlinggg🙆🏻‍♂️🥳❤️❤️❤️❤️
  May shiva bless you with immense power and happiness today, tomorrow and every day ahead🙌💯
                         - tera Baby Nibba🤣`,
  `Wishing you happy birthday Dumbo 🥰🤩💯❤️
  Aur ha final year Se Khatam hone Se pehle mingle ho jaa yaar`,
  `Suna hu 11th August ko Tera bday hai Sach me hai ya afwaah bnayi hai..bday PE itna dhyan na de padhai wagera KR ...aur ha cake Kam khana Ghar walo ke liye bhi chhod dena.........
  Aur ha happy bday .... let's celebrate your  bday......boooooooooooommmm bhhhhhdaaaaammmmm`,
  `Happy birthday 🤪🤪🤪honeyy sada sukhi raho khush raho, jaise hai vaise h rehna humesha 
  Stay safe✨✨♥️
  Milte hai jaldi😎`,
  `Happiest birthday honeyy♥️♥️♥️♥️
  Meri badi jisko khud se pata padta hai ki mein dukhi hu aur call karti hai,, notes ki devi✨✨
  Mujhe bahut ache se jaanti hai, colllege meri sabse pehli senior friend miss you so much, jaldi mil honey tu jaisi hai vaisi rehna bas kabhi change mat hona 🥺🥺♥️♥️
  Vikas Tera h hai tension mat le🥺
  Love you badii♥️♥️♥️`
];
var last_person_msg = `❤️❤️❤️❤️Couple Goals❤️❤️❤️❤️`;
var already_done = [];

function init() {

  present.addEventListener("click", function (e) {
    document.getElementById("present_text").style.display = "block";
    if (already_done.length != ans.length) {
      random_num = Math.floor((Math.random() * reviews.length));
      console.log(random_num);
      if (already_done.includes(random_num)) {
        do {
          console.log(random_num);
          random_num = Math.floor((Math.random() * reviews.length));
        } while (already_done.includes(random_num));
      }
      already_done.push(random_num);

      present.classList.add("open");
      console.log(ans[random_num]);
      document.getElementById("guess_img").src = "images/posts/" + ans[random_num] + ".jpg";
      setTimeout(function () {
        document.getElementById("questions").style.visibility = "visible";
        document.getElementById("questions").style.opacity = 1;
        document.getElementById("questions").style.display = "block";
      }, 300);
    } else if (random_num == reviews.length + 1) {
      window.alert("Bas Kar na aur kitni tariff sunni h 😂");
    } else {
      //if you want certian person to appear at the end 
      random_num = reviews.length + 1;
      document.getElementById("guess_img").src = "images/posts/last.jpg";
      setTimeout(function () {
        document.getElementById("questions").style.visibility = "visible";
        document.getElementById("questions").style.opacity = 1;
        document.getElementById("questions").style.display = "block";
      }, 300);
    }
  }, true);

  document.getElementById("view_answer").addEventListener("click", function (e) {
    document.getElementById("reviewer_name_with_honey").src = "images/pics_with_honey/" + (random_num == reviews.length + 1 ? "last" : ans[random_num]) + ".jpeg";
    // document.getElementById("reviewer_name").innerHTML = ans[random_num];
    document.getElementById("review").innerHTML = (random_num == reviews.length + 1 ? last_person_msg : reviews[random_num]);
    document.getElementById("reviewer_name").innerHTML = reviews_name[random_num]
    document.getElementById("questions").style.visibility = "hidden";
    document.getElementById("questions").style.opacity = 0;
    document.getElementById("questions").style.display = "none";
    document.getElementById("answers").style.visibility = "visible";
    document.getElementById("answers").style.opacity = 1;
    document.getElementById("answers").style.display = "block";
  }, true);


  document.getElementById("guess_another").addEventListener("click", function (e) {
    document.getElementById("answers").style.visibility = "hidden";
    document.getElementById("answers").style.opacity = 1;
    document.getElementById("answers").style.display = "none";
    document.getElementById("present_text").style.display = "none";
    setTimeout(function () {
      present.classList.remove("open");
    }, 300);
  }, true);


  nametag.innerText = to;
}

init();
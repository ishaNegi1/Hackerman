document.getElementById("input").addEventListener("keydown", async function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
  let get = document.getElementById("input").value;
  let a = ["Connecting To Server...",
            "Initializing Hack Program...",
            `Hacking ${get}'s Wifi Username...`,
            "Username Found...",
            `Hacking ${get}'s Wifi Password...`,
            "Password Found...",
            "Connecting To Another Server...",
            `Hacking ${get}'s Instagram...`,
            "Username Hacked...",
            "Password Hacked...",
            `${get}'s Instagram Hacked Successfully.`];
  let server_1 = async () => {
     return new Promise ((resolve,reject) => {
       setTimeout(() => {
          resolve(true);
     }, 2000);
     });
   };
   let hack = async (message) => {
     await server_1();
         s = document.getElementById("box_1");
         s.innerHTML = s.innerHTML + message + "<br>";
  };
  let server_3 = async() => {
    for(let i=0; i<a.length; i++){
      await hack(a[i]);
  };
   };
   await server_3();
    };
  });
  
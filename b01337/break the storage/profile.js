let database="data";$.get(database,function(a){jsons=JSON.parse(a),getFlag=jsons.user.super,window.localStorage.userID==getFlag.userID&&alert("BO1337{a2c13e70ff50376e259ddb5bd5e54a69b16e569f}"),0==window.localStorage.length&&(window.location="login.html")});
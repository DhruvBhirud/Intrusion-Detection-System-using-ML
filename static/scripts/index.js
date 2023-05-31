
function find_text(){
    var text = document.getElementById("Search").value;
    console.log(text);
    find(text);
  }

function choose_traffic(traffic){
    document.getElementById("choose_traffic_form").innerHTML = traffic;
    document.getElementById("traffic_type").value = traffic;
    // ['duration', 'protocol_type', 'service', 'flag', 'src_bytes', 'dst_bytes', 'land', 'wrong_fragment', 'logged_in', 'count', 'srv_count', 'Class']
    var normal = [[0,'udp','domain_u','SF',42,42,0,"out",13,19,'normal']];
    normal.push([0,'icmp','ecr_i','SF',40008,0,0,"in",3,3,'normal']);
    normal.push([0,'udp','private','SF',1,26,0,"in",15,4,'normal']);
    normal.push([0,'tcp','http','SF',209,762,0,"in",17,18,'normal']);
    normal.push([0,'udp','private','SF',54,55,0,"out",509,509,'normal']);
    //
    var dos = [[0,'tcp','name','REJ',0,0,0,"out",203,12,'dos']];
    dos.push([7638,'tcp','telnet','SF',0,44,0,"out",1,1,'dos']);
    dos.push([0,'tcp','http','S0',0,0,0,"out",82,82,'dos']);
    dos.push([0,'tcp','ftp_data','S0',0,0,0,"out",24,4,'dos']);
    dos.push([0,'tcp','finger','RSTO',0,0,0,"out",196,9,'dos']);
    //
    var u2r = [[135,'tcp','telnet','SF',353,5769,0,"in",1,1,'u2r']];
    u2r.push([58,'tcp','telnet','SF',2615,4233,0,"in",1,1,'u2r']);
    u2r.push([35,'tcp','ftp','SF',96,533,0,"in",1,1,'u2r']);
    u2r.push([84,'tcp','telnet','SF',2742,5433,0,"in",1,1,'u2r']);
    u2r.push([154,'tcp','telnet','SF',1510,3349,0,"out",1,1,'u2r']);
    //
    var r2l = [[4,'tcp','pop_3','SF',28,93,0,"in",1,1,'r2l']];
    r2l.push([4,'tcp','pop_3','SF',32,93,0,"in",1,1,'r2l']);
    r2l.push([288,'tcp','ftp','SF',160,597,0,"out",1,1,'r2l']);
    r2l.push([0,'tcp','telnet','SF',124,174,0,"out",2,2,'r2l']);
    r2l.push([0,'tcp','pop_3','SF',30,217,0,"in",1,1,'r2l']);
    //
    var probe = [[0,'tcp','telnet','REJ',0,0,0,"out",1,4,'probe']];
    probe.push([0,'tcp','uucp','SH',0,0,0,"out",1,1,'probe']);
    probe.push([0,'tcp','other','REJ',0,0,0,"out",480,1,'probe']);
    probe.push([0,'tcp','sunrpc','REJ',0,0,0,"out",1,3,'probe']);
    probe.push([0,'tcp','other','REJ',0,0,0,"out",505,1,'probe']);

    var json = {"Normal":normal, "DoS":dos, "R2L":r2l, "U2R": u2r, "Probe":probe}
    var random = Math.floor(Math.random() * 10)%5;
    console.log(json);
    console.log(traffic);
    var element = json[traffic][random];

    document.getElementById('dur').value=element[0];
    document.getElementById(element[1]).setAttribute('selected','');
    document.getElementById('service').value=element[2];
    document.getElementById('flag').value=element[3];
    document.getElementById('srcbytes').value=element[4];
    document.getElementById('dstnbytes').value=element[5];
    document.getElementById("wrng"+element[6]).setAttribute('selected','');
    document.getElementById(element[7]).setAttribute('selected','');
    document.getElementById('count').value=element[8];
    document.getElementById('srv_count').value=element[9];
  }

function submit_form(){
  document.getElementById("myform").submit();}

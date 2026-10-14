/* Al-Lateef Group of Schools — Shared JS */
var _B=function(){return location.pathname.includes('/pages/')?'../':'';};
var _P=function(){return location.pathname.includes('/pages/')?'':'pages/';};

/* ═══ BUILD NAV ═══ */
function buildNav(active){
  var b=_B(),p=_P();
  var items=[
    {id:'home',label:'Home',href:b+'index.html'},
    {id:'about',label:'About Us',href:p+'about.html',drop:[
      {l:'History',h:p+'about.html#history'},
      {l:'Vision, Mission &amp; Values',h:p+'about.html#vision'},
      {l:"Proprietor's Welcome",h:p+'about.html#welcome'},
      {l:'Head of Schools',h:p+'about.html#heads'},
      {l:'Our Milestones',h:p+'about.html#milestones'}
    ]},
    {id:'schools',label:'Our Schools',href:p+'schools.html',drop:[
      {l:'Nursery &amp; Primary',h:p+'schools.html#nursery'},
      {l:'Model College',h:p+'schools.html#college'},
      {l:'Facilities',h:p+'schools.html#facilities'},
      {l:'Gallery',h:p+'schools.html#gallery'}
    ]},
    {id:'admissions',label:'Admissions',href:p+'admissions.html',drop:[
      {l:'Why Choose Al-Lateef',h:p+'admissions.html#why'},
      {l:'Admission Process',h:p+'admissions.html#process'},
      {l:'Apply Online',h:p+'admissions.html#apply'},
      {l:'Request a Prospectus',h:p+'admissions.html#prospectus'},
      {l:'FAQs',h:p+'admissions.html#faq'}
    ]},
    {id:'academics',label:'Academics',href:p+'academics.html',drop:[
      {l:'Our Curriculum',h:p+'academics.html#curriculum'},
      {l:'Co-Curricular Activities',h:p+'academics.html#cocurricular'},
      {l:'E-Learning',h:p+'academics.html#elearning'},
      {l:'School Calendar',h:p+'academics.html#calendar'},
      {l:'Downloads',h:p+'academics.html#downloads'},
      {l:'School Portal',h:p+'portals.html',divider:true}
    ]},
    {id:'fees',label:'Pay Fees',href:p+'fees.html'},
    {id:'contact',label:'Contact',href:p+'contact.html'}
  ];

  /* Desktop nav items */
  var dLinks=items.map(function(n){
    var dd='';
    if(n.drop){
      dd='<div class="ddrop">'+n.drop.map(function(d){
        return (d.divider?'<hr class="dd-div">':'')+'<a href="'+d.h+'">'+d.l+'</a>';
      }).join('')+'</div>';
    }
    return '<li class="nvi"><a href="'+n.href+'"'+(n.id===active?' class="active"':'')+'>'+n.label+(n.drop?'<span class="caret">▾</span>':'')+'</a>'+dd+'</li>';
  }).join('');

  /* Mobile nav sections */
  var mobSecs=[
    {t:'Main',items:[{l:'Home',h:b+'index.html'},{l:'Pay Fees',h:p+'fees.html'},{l:'Contact',h:p+'contact.html'},{l:'Portals',h:p+'portals.html'}]},
    {t:'About Us',items:[{l:'History',h:p+'about.html#history'},{l:'Vision &amp; Mission',h:p+'about.html#vision'},{l:"Proprietor's Welcome",h:p+'about.html#welcome'},{l:'Head of Schools',h:p+'about.html#heads'},{l:'Milestones',h:p+'about.html#milestones'}]},
    {t:'Our Schools',items:[{l:'Nursery &amp; Primary',h:p+'schools.html#nursery'},{l:'Model College',h:p+'schools.html#college'},{l:'Facilities',h:p+'schools.html#facilities'}]},
    {t:'Admissions',items:[{l:'Why Al-Lateef',h:p+'admissions.html#why'},{l:'Admission Process',h:p+'admissions.html#process'},{l:'Apply Online',h:p+'admissions.html#apply'},{l:'Prospectus',h:p+'admissions.html#prospectus'},{l:'FAQs',h:p+'admissions.html#faq'}]},
    {t:'Academics',items:[{l:'Curriculum',h:p+'academics.html#curriculum'},{l:'Co-Curricular',h:p+'academics.html#cocurricular'},{l:'E-Learning',h:p+'academics.html#elearning'},{l:'Calendar',h:p+'academics.html#calendar'},{l:'Downloads',h:p+'academics.html#downloads'}]}
  ];
  var mobHtml=mobSecs.map(function(s){
    return '<div><div class="mob-sec">'+s.t+'</div>'+s.items.map(function(i){return '<a href="'+i.h+'">'+i.l+'</a>';}).join('')+'</div>';
  }).join('');

  document.getElementById('siteNav').innerHTML=
    '<div class="topbar">'+
      '<div class="topbar-l">'+
        '<span>Ifo, Ogun State</span>'+
        '<span><a href="tel:+2348000000000">+234 800 000 0000</a></span>'+
        '<span><a href="mailto:info@al-lateef.edu.ng">info@al-lateef.edu.ng</a></span>'+
      '</div>'+
      '<span class="topbar-r">Est. May 5, 2010 · 15 Years of Excellence</span>'+
    '</div>'+
    '<nav id="mainNav">'+
      '<a class="nav-brand" href="'+b+'index.html">'+
        '<div class="nav-logo-grp">'+
          '<div class="nav-logo"><img src="'+b+'images/logo-model-college.png" alt="Al-Lateef Model College logo"></div>'+
          '<div class="nav-logo"><img src="'+b+'images/logo-nur-primary.png" alt="Al-Lateef Nur/Primary School logo"></div>'+
        '</div>'+
        '<div class="nbt">'+
          '<strong>Al-Lateef Group of Schools</strong>'+
          '<span>Nursery · Primary · Model College · Ifo, Ogun</span>'+
        '</div>'+
      '</a>'+
      '<ul class="nav-links">'+dLinks+'<li class="nvi"><a href="'+p+'portals.html" class="nav-cta">Login <span class="arr">→</span></a></li></ul>'+
      '<button class="ham" id="hamBtn" onclick="toggleMob()" aria-label="Open menu"><span></span><span></span><span></span></button>'+
    '</nav>'+
    '<div class="mob" id="mobNav">'+
      '<button class="mob-close" onclick="toggleMob()" aria-label="Close menu">✕</button>'+
      mobHtml+
    '</div>';

  window.addEventListener('scroll',function(){
    var n=document.getElementById('mainNav');
    if(n)n.classList.toggle('scrolled',scrollY>40);
  });
}

function toggleMob(){
  var m=document.getElementById('mobNav'),b=document.getElementById('hamBtn');
  m.classList.toggle('open');b.classList.toggle('open');
  document.body.style.overflow=m.classList.contains('open')?'hidden':'';
}

/* ═══ BUILD FOOTER ═══ */
function buildFooter(){
  var b=_B(),p=_P();
  document.getElementById('siteFooter').innerHTML=
    '<div class="nl"><div class="nl-in">'+
      '<div>'+
        '<h3>Stay Connected with Al-Lateef</h3>'+
        '<p>Subscribe for term updates, events, and announcements</p>'+
      '</div>'+
      '<div class="nl-form">'+
        '<input type="email" id="nlE" placeholder="Enter your email" aria-label="Email address">'+
        '<button class="btn btn-primary" onclick="nlSub()">Subscribe <span class="arr">→</span></button>'+
      '</div>'+
    '</div></div>'+
    '<footer><div class="fi">'+
      '<div class="ft">'+
        '<div class="fb">'+
          '<div class="fn">Al-Lateef Group of Schools</div>'+
          '<p>Quality education and strong values since May 5, 2010. Ifo, Ogun State, Nigeria.</p>'+
          '<div class="fsoc"><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="Instagram">ig</a><a href="#" aria-label="X">𝕏</a><a href="#" aria-label="WhatsApp">W</a></div>'+
        '</div>'+
        '<div class="fc"><h4>Our Schools</h4><ul class="fl">'+
          '<li><a href="'+p+'schools.html#nursery">Nursery &amp; Primary</a></li>'+
          '<li><a href="'+p+'schools.html#college">Model College</a></li>'+
          '<li><a href="'+p+'admissions.html">Admissions</a></li>'+
          '<li><a href="'+p+'fees.html">Pay Fees</a></li>'+
          '<li><a href="'+p+'academics.html#calendar">Calendar</a></li>'+
        '</ul></div>'+
        '<div class="fc"><h4>Academics</h4><ul class="fl">'+
          '<li><a href="'+p+'academics.html#curriculum">Curriculum</a></li>'+
          '<li><a href="'+p+'academics.html#cocurricular">Co-Curricular</a></li>'+
          '<li><a href="'+p+'academics.html#elearning">E-Learning</a></li>'+
          '<li><a href="'+p+'academics.html#downloads">Downloads</a></li>'+
          '<li><a href="'+p+'portals.html">School Portal</a></li>'+
        '</ul></div>'+
        '<div class="fc"><h4>Quick Links</h4><ul class="fl">'+
          '<li><a href="'+p+'about.html">About Us</a></li>'+
          '<li><a href="'+p+'about.html#milestones">Milestones</a></li>'+
          '<li><a href="'+p+'admissions.html#apply">Apply Online</a></li>'+
          '<li><a href="'+p+'fees.html">Pay Fees</a></li>'+
          '<li><a href="'+p+'contact.html">Contact Us</a></li>'+
        '</ul></div>'+
      '</div>'+
      '<div class="fbot">'+
        '<span>© 2025 Al-Lateef Group of Schools, Ifo, Ogun State. All rights reserved.</span>'+
        '<span>Founded May 5, 2010 · 15 Years of Excellence</span>'+
      '</div>'+
    '</div></footer>';
}
function nlSub(){
  var e=document.getElementById('nlE');
  if(!e||!e.value.includes('@')){alert('Please enter a valid email address.');return;}
  alert('Thank you! You have been subscribed to Al-Lateef updates.');
  e.value='';
}

/* ═══ PORTAL MODAL ═══ */
var PCONF={
  student:{title:'Student Portal',desc:'Access results, timetables, assignments & e-library',bl:'Student',id:'Student ID (e.g. AL-2025-001)'},
  teacher:{title:'Teacher Portal',desc:'Manage classes, grades, attendance & resources',bl:'Staff',id:'Staff ID'},
  parent:{title:'Parent Portal',desc:"Track your child's progress & pay fees",bl:'Parent',id:"Child's Student ID or Phone"},
  mgmt:{title:'Management Portal',desc:'Full school administration & analytics',bl:'Management',id:'Admin Username'}
};
var _cp='student';
function openModal(t){
  _cp=t;var c=PCONF[t];
  document.getElementById('mBdg').innerHTML='<div class="m-badge">'+c.bl+'</div>';
  document.getElementById('mTtl').textContent=c.title;
  document.getElementById('mDsc').textContent=c.desc;
  document.getElementById('mIdLbl').textContent=c.id;
  _mTab('login',document.querySelector('.m-tab'));
  document.getElementById('mOv').classList.add('active');
  document.body.style.overflow='hidden';
}
function closeModal(){document.getElementById('mOv').classList.remove('active');document.body.style.overflow='';}
function _mTab(t,btn){
  document.querySelectorAll('.m-tab').forEach(function(b){b.classList.remove('active');});
  btn.classList.add('active');
  document.getElementById('mLog').style.display=t==='login'?'block':'none';
  document.getElementById('mReg').style.display=t==='reg'?'block':'none';
}
function doLogin(){
  var id=document.getElementById('mId').value;
  if(!id){alert('Please enter your ID.');return;}
  alert('Welcome!\n\nLogging into '+PCONF[_cp].title+'.\n\nContact the admin office for your portal credentials.\nEmail: portal@al-lateef.edu.ng\nPhone: +234 800 000 0000');
  closeModal();
}
function doReg(){
  alert('Registration submitted!\n\nYou will receive login details by email within 24 hours.\nFor urgent help: +234 800 000 0000');
  closeModal();
}
function buildModal(){
  var p=_P();
  document.getElementById('mRoot').innerHTML=
    '<div class="m-ov" id="mOv">'+
      '<div class="m-box">'+
        '<button class="m-close" onclick="closeModal()" aria-label="Close">✕</button>'+
        '<div id="mBdg"></div>'+
        '<h2 id="mTtl"></h2>'+
        '<p id="mDsc"></p>'+
        '<div class="m-tabs">'+
          '<button class="m-tab active" onclick="_mTab(\'login\',this)">Login</button>'+
          '<button class="m-tab" onclick="_mTab(\'reg\',this)">Register</button>'+
        '</div>'+
        '<div id="mLog">'+
          '<div class="fg"><label id="mIdLbl">ID</label><input type="text" id="mId" placeholder="Enter your ID"></div>'+
          '<div class="fg"><label>Password</label><input type="password" placeholder="Your password"></div>'+
          '<button class="sbtn" onclick="doLogin()">Login to Portal</button>'+
          '<p class="form-note">'+
            '<a href="#">Forgot password?</a> &nbsp;·&nbsp; '+
            '<a href="'+p+'contact.html">Get help</a>'+
          '</p>'+
        '</div>'+
        '<div id="mReg" style="display:none;">'+
          '<div class="f2">'+
            '<div class="fg"><label>First Name</label><input type="text" placeholder="First name"></div>'+
            '<div class="fg"><label>Last Name</label><input type="text" placeholder="Last name"></div>'+
          '</div>'+
          '<div class="fg"><label>ID / Reference No.</label><input type="text" placeholder="ID from school"></div>'+
          '<div class="fg"><label>Email</label><input type="email" placeholder="email@example.com"></div>'+
          '<div class="fg"><label>Phone</label><input type="tel" placeholder="+234 ..."></div>'+
          '<div class="fg"><label>Password</label><input type="password" placeholder="Create a strong password"></div>'+
          '<button class="sbtn" onclick="doReg()">Create Account</button>'+
        '</div>'+
      '</div>'+
    '</div>';
  document.getElementById('mOv').addEventListener('click',function(e){if(e.target.id==='mOv')closeModal();});
}

/* ═══ SCROLL REVEAL ═══ */
function initReveal(){
  if(!window.IntersectionObserver){
    document.querySelectorAll('.rv,.rv-l,.rv-r,.rv-s,.stag').forEach(function(el){el.classList.add('vis');});
    return;
  }
  var obs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){e.target.classList.add('vis');obs.unobserve(e.target);}
    });
  },{threshold:0.1,rootMargin:'0px 0px -50px 0px'});
  document.querySelectorAll('.rv,.rv-l,.rv-r,.rv-s,.stag').forEach(function(el){obs.observe(el);});
}

/* ═══ FAQ ═══ */
function initFAQ(){
  document.querySelectorAll('.faq-q').forEach(function(q){
    q.addEventListener('click',function(){
      var item=q.parentElement;
      var wasOpen=item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function(i){i.classList.remove('open');});
      if(!wasOpen)item.classList.add('open');
    });
  });
}

/* ═══ COUNTERS ═══ */
function initCounters(){
  if(!window.IntersectionObserver)return;
  var obs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(!e.isIntersecting)return;
      var el=e.target;
      var target=parseInt(el.dataset.count);
      var suf=el.dataset.suffix||'';
      var v=0;var step=Math.max(target/60,1);
      var iv=setInterval(function(){
        v=Math.min(v+step,target);
        el.textContent=Math.floor(v).toLocaleString()+suf;
        if(v>=target){el.textContent=target.toLocaleString()+suf;clearInterval(iv);}
      },18);
      obs.unobserve(el);
    });
  },{threshold:0.5});
  document.querySelectorAll('[data-count]').forEach(function(el){obs.observe(el);});
}

/* ═══ SMOOTH ANCHOR SCROLL ═══ */
function initScroll(){
  document.addEventListener('click',function(e){
    var a=e.target.closest('a[href*="#"]');
    if(!a)return;
    var href=a.getAttribute('href')||'';
    var hi=href.indexOf('#');
    if(hi===-1)return;
    var path=href.slice(0,hi);
    /* only handle if same page or hash-only link */
    if(path&&path.length>0){
      var curr=location.pathname;
      var samePage=curr.endsWith(path)||
        curr.endsWith(path.replace('../',''))||
        curr.endsWith(path.replace('pages/',''));
      if(!samePage)return;
    }
    var target=document.getElementById(href.slice(hi+1));
    if(target){
      e.preventDefault();
      var offset=90;/* nav height */
      var top=target.getBoundingClientRect().top+window.pageYOffset-offset;
      window.scrollTo({top:top,behavior:'smooth'});
    }
  });
}

/* ═══ CLOSE MOB NAV ON OUTSIDE CLICK ═══ */
function initMobClose(){
  document.addEventListener('click',function(e){
    var mob=document.getElementById('mobNav');
    var btn=document.getElementById('hamBtn');
    if(mob&&mob.classList.contains('open')&&!mob.contains(e.target)&&btn&&!btn.contains(e.target)){
      mob.classList.remove('open');btn.classList.remove('open');
      document.body.style.overflow='';
    }
  });
}

/* ═══ INIT ALL ═══ */
document.addEventListener('DOMContentLoaded',function(){
  if(document.getElementById('siteNav'))buildNav(window._pg||'home');
  if(document.getElementById('siteFooter'))buildFooter();
  if(document.getElementById('mRoot'))buildModal();
  initReveal();
  initFAQ();
  initCounters();
  initScroll();
  initMobClose();
});

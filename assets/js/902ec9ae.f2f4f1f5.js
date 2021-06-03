(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{91:function(e,t,b){"use strict";b.r(t),b.d(t,"frontMatter",(function(){return p})),b.d(t,"metadata",(function(){return r})),b.d(t,"toc",(function(){return u})),b.d(t,"default",(function(){return o}));var l=b(3),n=b(7),a=(b(0),b(105)),c=(b(107),["components"]),p={title:"FOTA",date:new Date("2021-05-10T00:00:00.000Z"),sidebar_position:3},r={unversionedId:"FOTA",id:"FOTA",isDocsHomePage:!1,title:"FOTA",description:"FOTA(Firmware Over The Air)\ub294 \ub514\ubc14\uc774\uc2a4\uc758 \ud38c\uc6e8\uc5b4\ub97c \ub124\ud2b8\uc6cc\ud06c\ub97c \ud1b5\ud574 \ub2e4\uc591\ud55c \ubc29\uc2dd\uc73c\ub85c \ubc30\ud3ec\ud558\ub294 \uac83\uc744 \ub9d0\ud569\ub2c8\ub2e4.",source:"@site/docs/FOTA.md",sourceDirName:".",slug:"/FOTA",permalink:"/WIZnet-ASG-PoC-Docs/FOTA",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/FOTA.md",version:"current",sidebarPosition:3,frontMatter:{title:"FOTA",date:"2021-05-10T00:00:00.000Z",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Device Management",permalink:"/WIZnet-ASG-PoC-Docs/DeviceManagement"}},u=[{value:"\ub514\ubc14\uc774\uc2a4 \uadf8\ub8f9 \uc120\ud0dd",id:"\ub514\ubc14\uc774\uc2a4-\uadf8\ub8f9-\uc120\ud0dd",children:[]},{value:"\uc774\ubbf8\uc9c0 \ud328\ud0a4\uc9c0 \uc5c5\ub85c\ub4dc",id:"\uc774\ubbf8\uc9c0-\ud328\ud0a4\uc9c0-\uc5c5\ub85c\ub4dc",children:[]},{value:"\ubc30\ud3ec \uc0dd\uc131",id:"\ubc30\ud3ec-\uc0dd\uc131",children:[]},{value:"\ubc30\ud3ec \ub9ac\uc2a4\ud2b8 \ud655\uc778",id:"\ubc30\ud3ec-\ub9ac\uc2a4\ud2b8-\ud655\uc778",children:[]},{value:"ASG \ub514\ubc14\uc774\uc2a4 \uc5c5\ub370\uc774\ud2b8",id:"asg-\ub514\ubc14\uc774\uc2a4-\uc5c5\ub370\uc774\ud2b8",children:[]},{value:"Node \ub514\ubc14\uc774\uc2a4 \uc5c5\ub370\uc774\ud2b8",id:"node-\ub514\ubc14\uc774\uc2a4-\uc5c5\ub370\uc774\ud2b8",children:[]}],i={toc:u};function o(e){var t=e.components,b=Object(n.a)(e,c);return Object(a.b)("wrapper",Object(l.a)({},i,b,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"FOTA(Firmware Over The Air)\ub294 \ub514\ubc14\uc774\uc2a4\uc758 \ud38c\uc6e8\uc5b4\ub97c \ub124\ud2b8\uc6cc\ud06c\ub97c \ud1b5\ud574 \ub2e4\uc591\ud55c \ubc29\uc2dd\uc73c\ub85c \ubc30\ud3ec\ud558\ub294 \uac83\uc744 \ub9d0\ud569\ub2c8\ub2e4."),Object(a.b)("p",null,"Azure Sphere\uc758 Azure Sphere Security Service\ub97c \ud1b5\ud574 ASG210\uc758 OTA\ub97c \uc9c4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Azure Sphere Security Service(AS3)\ub294 \uc720\uc9c0 \uad00\ub9ac \ubc0f \uc5c5\ub370\uc774\ud2b8 \ub4f1\uc744 \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 Azure Sphere \uce69\uacfc \ud1b5\uc2e0\ud558\ub294 \ud074\ub77c\uc6b0\ub4dc \uae30\ubc18 \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4.")),Object(a.b)("p",null,"Azure Sphere\uc758 OTA\ub294 \uc778\uc99d\ub41c \ubcf4\uc548 \uc5f0\uacb0\uc744 \ud1b5\ud574\uc11c\ub9cc \uc5c5\ub370\uc774\ud2b8\uac00 \uc9c4\ud589\ub418\uc5b4 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \uc18c\ud504\ud2b8\uc6e8\uc5b4\uc758 \uc6d0\uaca9 \uc11c\ube44\uc2a4\uc640 \uc5c5\ub370\uc774\ud2b8\ub97c \uac00\ub2a5\ud558\uac8c \ud558\uace0, \uc9c0\uc18d\uc801\uc774\uace0 \uc548\uc815\uc801\uc778 \uc6b4\uc601\uc744 \ubcf4\uc7a5\ud569\ub2c8\ub2e4."),Object(a.b)("p",null,"ASG DM\uc5d0\uc11c\ub294 \uc774\ub7ec\ud55c FOTA \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \uae30\ub2a5\uc744 \uc81c\uacf5\ud558\uba70, \uc9c4\ud589 \uacfc\uc815\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"1. \ub514\ubc14\uc774\uc2a4 \uadf8\ub8f9 \uc120\ud0dd")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\ud38c\uc6e8\uc5b4\ub97c \ubc30\ud3ec\ud558\uace0 \ub514\ubc14\uc774\uc2a4 \uadf8\ub8f9\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4."),Object(a.b)("li",{parentName:"ul"},"\ub514\ubc14\uc774\uc2a4\uac00 \uc18c\uc18d\ub420 \uadf8\ub8f9\uc785\ub2c8\ub2e4.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"2. \uc774\ubbf8\uc9c0 \ud328\ud0a4\uc9c0(.imagepackage) \uc5c5\ub85c\ub4dc")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Image Package \ud30c\uc77c\uc744 AS3\uc5d0 \uc5c5\ub85c\ub4dc \ud569\ub2c8\ub2e4. "),Object(a.b)("li",{parentName:"ul"},"\uc774\ubbf8\uc9c0 \ud30c\uc77c\uc758 \uac1c\uc218\ub294 \uc5b4\ub5a4 application\uc744 \uc0ac\uc6a9\ud558\ub294\uc9c0\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\uc608) M4, A7 \ucf54\uc5b4 \uc0ac\uc6a9 \uc2dc -> 2\uac1c \uc774\ubbf8\uc9c0 \ud544\uc694 (RT app, HL app)"))),Object(a.b)("li",{parentName:"ul"},"Ethernet\uc744 \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0 Board config image\ub97c \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4.  ")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"3. \ubc30\ud3ec \uc0dd\uc131")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\uc5c5\ub85c\ub4dc\ud55c \uc774\ubbf8\uc9c0 \uc815\ubcf4\ub97c \uae30\ubc18\uc73c\ub85c \ubc30\ud3ec\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4. "),Object(a.b)("li",{parentName:"ul"},"\ub9c8\uc9c0\ub9c9\uc73c\ub85c \uc0dd\uc131\ub41c \ubc30\ud3ec\uac00 \ub514\ubc14\uc774\uc2a4\ub85c \uc5c5\ub370\uc774\ud2b8 \ub429\ub2c8\ub2e4.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"4. \ubc30\ud3ec \ub9ac\uc2a4\ud2b8 \ud655\uc778")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\uc0dd\uc131\ub41c \ubc30\ud3ec \ub9ac\uc2a4\ud2b8\ub97c \ud655\uc778\ud569\ub2c8\ub2e4.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"5. ASG \ub514\ubc14\uc774\uc2a4 \uc5c5\ub370\uc774\ud2b8")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"ASG \ub514\ubc14\uc774\uc2a4\uc5d0 \ub300\ud55c \uc5c5\ub370\uc774\ud2b8\ub97c \uc9c4\ud589\ud569\ub2c8\ub2e4. \uc774 \ub54c \uc7a5\uce58\ub294 \ub124\ud2b8\uc6cc\ud06c\uc5d0 \uc5f0\uacb0\ub41c \uc0c1\ud0dc\uc5ec\uc57c \ud569\ub2c8\ub2e4."),Object(a.b)("li",{parentName:"ul"},"\uc7a5\uce58\uac00 \uc120\ud0dd\ub41c \uadf8\ub8f9\uc5d0 \ud3ec\ud568\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc73c\uba74 \uadf8\ub8f9\uc744 \uc124\uc815\ud558\uace0 Restart \uba85\ub839\uc744 \ubcf4\ub0c5\ub2c8\ub2e4.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"6. Node \ub514\ubc14\uc774\uc2a4 \uc5c5\ub370\uc774\ud2b8 (\uc0ac\uc6a9 \uc2dc)")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"ASG210\uc5d0 \uc5f0\uacb0\ub41c Node \ub514\ubc14\uc774\uc2a4\uc758 \ud38c\uc6e8\uc5b4\ub97c \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4."),Object(a.b)("li",{parentName:"ul"},"\ud604\uc7ac WIZ750SR \ub514\ubc14\uc774\uc2a4 \ud38c\uc6e8\uc5b4 \uc5c5\ub370\uc774\ud2b8\ub9cc \uc9c0\uc6d0\ud569\ub2c8\ub2e4.")),Object(a.b)("h2",{id:"\ub514\ubc14\uc774\uc2a4-\uadf8\ub8f9-\uc120\ud0dd"},"\ub514\ubc14\uc774\uc2a4 \uadf8\ub8f9 \uc120\ud0dd"),Object(a.b)("p",null,"\ub514\ubc14\uc774\uc2a4 \uadf8\ub8f9\uc740 \ub3d9\uc77c\ud55c \uc81c\ud488 \uc720\ud615\uc758 \ub514\ubc14\uc774\uc2a4 \ubaa8\uc74c\uc785\ub2c8\ub2e4. \ub514\ubc14\uc774\uc2a4 \uadf8\ub8f9\uc744 \uc9c0\uc815\ud558\uc5ec \uc5ec\ub7ec \ub514\ubc14\uc774\uc2a4\uc5d0 \ub3d9\uc77c\ud55c \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc77c\uad04 \ubc30\ud3ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(a.b)("p",null,"\uac01 \ub514\ubc14\uc774\uc2a4\ub294 \ud558\ub098\uc758 \ub514\ubc14\uc774\uc2a4 \uadf8\ub8f9\uc5d0 \uc18d\ud558\uba70, \ud558\ub098\uc758 \ub514\ubc14\uc774\uc2a4 \uadf8\ub8f9\uc740 \ud558\ub098\uc758 \uc81c\ud488(Product)\uc5d0 \uc18d\ud569\ub2c8\ub2e4. "),Object(a.b)("h2",{id:"\uc774\ubbf8\uc9c0-\ud328\ud0a4\uc9c0-\uc5c5\ub85c\ub4dc"},"\uc774\ubbf8\uc9c0 \ud328\ud0a4\uc9c0 \uc5c5\ub85c\ub4dc"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"\uc774\ubbf8\uc9c0 \ud328\ud0a4\uc9c0\ub294 \uc774\ubbf8\uc9c0, \uadf8\ub9ac\uace0 \uc774\ubbf8\uc9c0\uc640 \uad00\ub828\ub41c \uba54\ud0c0\ub370\uc774\ud130\uac00 \uacb0\ud569\ub41c \ud328\ud0a4\uc9c0 \ud30c\uc77c\uc785\ub2c8\ub2e4. \ubc30\ud3ec \uc2dc \uc815\ubcf4\ub97c \ud3ec\ud568\ud558\uace0 \uc788\ub294 \uc774\ubbf8\uc9c0 \ud328\ud0a4\uc9c0\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.")),Object(a.b)("p",null,"\ubc30\ud3ec\ud560 \uc774\ubbf8\uc9c0 \ud328\ud0a4\uc9c0\ub97c \uc5c5\ub85c\ub4dc \ud569\ub2c8\ub2e4."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\ubc30\ud3ec \uc0dd\uc131 \uc2dc \uc774\ubbf8\uc9c0 ID\uac00 \ud544\uc694"),"\ud558\ubbc0\ub85c, \uc0ac\uc6a9\uc790\ub294 \uc774\ubbf8\uc9c0 \ud328\ud0a4\uc9c0\ub97c \uc0dd\uc131\ud560 \ub54c \uac01 \uc774\ubbf8\uc9c0\uc758 ID\ub97c \uba54\ubaa8\ud574 \ub450\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Image ID")),Object(a.b)("p",null,"\uc774\ubbf8\uc9c0 ID\ub294 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \ube4c\ub4dc \uacb0\uacfc\ub85c \ud45c\uc2dc\ub429\ub2c8\ub2e4."),Object(a.b)("p",null,"\uc774\ubbf8 \uc0dd\uc131\ub41c \uc774\ubbf8\uc9c0 \ud30c\uc77c\uc758 \uc815\ubcf4\ub97c \ubcf4\ub824\uba74 ",Object(a.b)("inlineCode",{parentName:"p"},"Azure Sphere Developer command prompt"),"\uc5d0\uc11c \uc544\ub798 \uba85\ub839\uc744 \ud1b5\ud574 \ud655\uc778\ud569\ub2c8\ub2e4."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"azsphere image-package show -f <file path>\n")),Object(a.b)("p",null,"\uacb0\uacfc\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4."),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://paper-attachments.dropbox.com/s_6B416B4379E3C4034F7587B155C6F6BEFE698D1D76F13665776365B9EF449879_1599800286024_image.png",alt:null})),Object(a.b)("h2",{id:"\ubc30\ud3ec-\uc0dd\uc131"},"\ubc30\ud3ec \uc0dd\uc131"),Object(a.b)("p",null,"\ubc30\ud3ec(Deployment)\ub780 \ub514\ubc14\uc774\uc2a4\uc5d0 \uc5c5\ub370\uc774\ud2b8 \ud560 \uc774\ubbf8\uc9c0 \ud328\ud0a4\uc9c0 \uc138\ud2b8\ub97c \uc758\ubbf8\ud569\ub2c8\ub2e4."),Object(a.b)("p",null,"\uc774\uc804 \ub2e8\uacc4\uc5d0\uc11c \uc5c5\ub85c\ub4dc\ud55c \uc774\ubbf8\uc9c0\ub4e4\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud558\ub098\uc758 \ubc30\ud3ec\ub85c \ub9cc\ub4ed\ub2c8\ub2e4."),Object(a.b)("p",null,"\ubc30\ud3ec\uc5d0 \ud3ec\ud568\uc2dc\ud0ac \uc774\ubbf8\uc9c0 ID\ub97c \uc785\ub825\ud569\ub2c8\ub2e4."),Object(a.b)("p",null,"Azure Sphere\uc758 \ubc30\ud3ec\uc5d0\ub294 \uc774\ubbf8\uc9c0\ub97c 4\uac1c\uae4c\uc9c0 \ud3ec\ud568\uc2dc\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"High-level app (for A7 core)"),Object(a.b)("li",{parentName:"ul"},"Real-time app 1 (for M4 core 1)"),Object(a.b)("li",{parentName:"ul"},"Real-time app 2 (for M4 core 2)"),Object(a.b)("li",{parentName:"ul"},"Board configuration",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Ethernet \uc0ac\uc6a9 \uc2dc \ud544\uc694")))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"ASG210\uc758 2 port ethernet application\uc740 A7 \ubc0f M4 core\uc640 Ethernet \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\ubbc0\ub85c \ucd1d 3\uac1c\uc758 \uc774\ubbf8\uc9c0\ub97c \uc0ac\uc6a9\ud574 \ubc30\ud3ec\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4.")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Create Deployment")," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc5ec \ubc30\ud3ec\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),Object(a.b)("h2",{id:"\ubc30\ud3ec-\ub9ac\uc2a4\ud2b8-\ud655\uc778"},"\ubc30\ud3ec \ub9ac\uc2a4\ud2b8 \ud655\uc778"),Object(a.b)("p",null,"\uc0dd\uc131\ub41c \ubc30\ud3ec \ub9ac\uc2a4\ud2b8\ub97c \ud655\uc778\ud569\ub2c8\ub2e4."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Deployment Id: \ubc30\ud3ec\uc758 \uace0\uc720 ID\uc785\ub2c8\ub2e4."),Object(a.b)("li",{parentName:"ul"},"Deployed Images: \ubc30\ud3ec\uc5d0 \ud3ec\ud568\ub41c \uc774\ubbf8\uc9c0 \ub9ac\uc2a4\ud2b8\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4."),Object(a.b)("li",{parentName:"ul"},"Deployment Date: \ubc30\ud3ec\uac00 \uc0dd\uc131\ub41c \uc2dc\uac04\uc785\ub2c8\ub2e4.")),Object(a.b)("h2",{id:"asg-\ub514\ubc14\uc774\uc2a4-\uc5c5\ub370\uc774\ud2b8"},"ASG \ub514\ubc14\uc774\uc2a4 \uc5c5\ub370\uc774\ud2b8"),Object(a.b)("p",null,"ASG \ub514\ubc14\uc774\uc2a4\uac00 \uc0c8 \uc5c5\ub370\uc774\ud2b8\ub97c \uc218\uc2e0\ud558\uae30 \uc704\ud574\uc11c\ub294 \ub124\ud2b8\uc6cc\ud06c\uc5d0 \uc5f0\uacb0\ub41c \uc0c1\ud0dc\uc5ec\uc57c \ud569\ub2c8\ub2e4."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Update Device")," \ubc84\ud2bc \ud074\ub9ad \uc2dc, \uc7a5\uce58\ub97c \ud604\uc7ac \uc120\ud0dd\ub41c \uadf8\ub8f9\uc73c\ub85c \uc774\ub3d9\ud558\uace0 Restart \uba85\ub839\uc744 \ubcf4\ub0c5\ub2c8\ub2e4."),Object(a.b)("p",null,"\uc7a5\uce58\uac00 \uc7ac\uc2dc\uc791 \ub418\uba74 AS3\ub85c\ubd80\ud130 \uc5c5\ub370\uc774\ud2b8\ub97c \uc218\uc2e0\ud558\uc5ec \uc0c8\ub85c\uc6b4 App\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8 \ub429\ub2c8\ub2e4."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Restart \uba85\ub839\uc740 application\uc5d0\uc11c \uad6c\ud604\ub418\uc5b4 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4. (IoT Hub direct method \uc0ac\uc6a9)\n\uc7a5\uce58\ub97c Reset \ud560 \uc218 \uc5c6\ub294 \uacbd\uc6b0, 24\uc2dc\uac04 \ub0b4\uc5d0 \uc5c5\ub370\uc774\ud2b8\uac00 \uc774\ub8e8\uc5b4\uc9d1\ub2c8\ub2e4.")),Object(a.b)("h2",{id:"node-\ub514\ubc14\uc774\uc2a4-\uc5c5\ub370\uc774\ud2b8"},"Node \ub514\ubc14\uc774\uc2a4 \uc5c5\ub370\uc774\ud2b8"),Object(a.b)("p",null,"ASG \ud558\uc704\uc758 Node \ub514\ubc14\uc774\uc2a4(WIZ750SR \uc9c0\uc6d0)\uc758 \ud38c\uc6e8\uc5b4\ub97c \uc5c5\ub370\uc774\ud2b8 \ud569\ub2c8\ub2e4."))}o.isMDXComponent=!0}}]);
import { url } from "./paths"

const d = {
  menuItems : [
    {
        name:'HOME',
        link: url.home
    },
    {
        name:'Browse',
        submenu:[
          {
            name:'All',
            link: url.browse
          }
        ]
    },
    {
        name:'Auctions',
        link:url.auctions
    },
    {
        name:'About Us',
        submenu:[
            {
                name:'About Us',
                link:url.aboutUs
            },
            {
                name:'Mobile Applications',
                link:url.apps
            }
        ]
    },
    {
        name:'Financing',
        link:url.financing
    },
    {
        name:'Calendar',
        link:url.calendar
    }
],
    about:{
        missionTitle:'Mission Statement',
        missionStatement:'MachineryMax is committed to providing maximum service, and return on investment by utilizing our state of the art, high traffic online auction marketplace offering machinery sellers and buyers a global, transparent, and easy to use system.',
        serviceTitle:'Services',
        ourTeam:'Our Team',
        direct:'Direct:',
        cell:'Cell:',
        customersReviewTitle:'What Our Customers are Saying',
        customersReview:'MachineryMax offers its services to financial institutions, bankruptcy trustees, and turn around managers.',
        customerName:'Sia Dev',
        customerDesignation:'Managers',
        services: [
            {
              icon:'/assets/images/sell/hammer.png',
              title:'Auction',
              desc:'MachineryMax Auctions offers several different services according to our clients needs such as',
              pointers:['Complete shop closures','Cleaning, Staging, Professional Photography','Clear Out Services','Valuation Service','Individual Asset Disposition','Valuations']
            },
            {
              icon:'/assets/images/sell/hammer.png',
              title:'Asset Recovery',
              desc:'MachineryMax offers its services to financial institutions, bankruptcy trustees, and turn around managers',
              pointers:['Collections','Asset Recovery','Asset Remarketing','Legal Services']
            },
            {
              icon:'/assets/images/sell/handshake.png',
              title:'Acquisitions',
              desc:'If going to auction is not an option, MachineryMax offers its acquisition services to our clients',
              pointers:['Immediate Cash Payouts','Complete plants, real estate, or individual assets']
            }
          ],
        team:[
            {
              name:'Kirk Gass',
              title:'Co-Founder/President',
              city:'Tracy California Office',
              email:'kirk@machinerymax.com',
              facebook:'https://facebook.com',
              linkedIn:'https://www.linkedin.com/in/kirk-gass-9164669/',
              instagram:'https://instagram.com',
              direct:'866-988-4667 Ext 707',
              cell:'925-250-8248',
              photo:'/assets/images/aboutUs/KirkGass.jpg'
            },
            {
                name:'Charles Swafford',
                title:'Co-Founder/Vice President',
                city:'Tracy California Office',
                email:'charles@machinerymax.com',
                facebook:'https://facebook.com',
                linkedIn:'https://www.linkedin.com/in/charles-swafford-2b001729/',
                instagram:'https://instagram.com',
                direct:'866-988-4667 Ext 708',
                cell:'925-872-0929',
                photo:'/assets/images/aboutUs/CharlesSwafford.jpg'
            },
            {
                name:'Eric Beach',
                title:'Auction Operations',
                city:'North Carolina Office',
                email:'eric@machinerymax.com',
                facebook:'https://facebook.com',
                linkedIn:'https://www.linkedin.com/in/eric-beach-b9349826/',
                instagram:'https://instagram.com',
                direct:'866-988-4667 Ext 702',
                cell:'704-608-9830',
                photo:'/assets/images/aboutUs/EricBeach.jpg'
            },
            {
                name:'Jack Ragan',
                title:'Vice President of Business Development',
                city:'Portland Oregon Office',
                email:'jack@machinerymax.com',
                facebook:'https://facebook.com',
                linkedIn:'https://www.linkedin.com/in/jack-ragan-80971916/',
                instagram:'https://instagram.com',
                direct:'866-988-4667 Ext 700',
                cell:'503-806-4611',
                photo:'/assets/images/aboutUs/JackRagan.jpg'
            },
            {
                name:'Ryan Hodsdon',
                title:'Legal and Distressed Asset Business Development Manager',
                city:'',
                email:'ryan@machinerymax.com',
                facebook:'https://facebook.com',
                linkedIn:'',
                instagram:'https://instagram.com',
                direct:'866-988-4667 Ext 709',
                cell:'603-841-8016',
                photo:'/assets/images/aboutUs/RyanHodsdon.jpg'
              },
              {
                name:'Robert Skeates',
                title:'Vice President Sales Canada',
                city:'Toronto Offices – Port Credit, ON CANADA',
                email:'robert@machinerymax.com',
                facebook:'https://facebook.com',
                linkedIn:'https://www.linkedin.com/in/robert-skeates-86925816/',
                instagram:'https://instagram.com',
                direct:'866-988-4667 Ext 703',
                cell:'416-904-2475',
                photo:'/assets/images/aboutUs/DummyProfile.png'
              },
              {
                name:'Mike Arnott',
                title:'Midwest Sales Director',
                city:'Shawnee Kansas Office',
                email:'mike@machinerymax.com',
                facebook:'https://facebook.com',
                linkedIn:'',
                instagram:'https://instagram.com',
                direct:'866-988-4667 Ext 701',
                cell:'913-333-8396',
                photo:'/assets/images/aboutUs/MikeArnott.jpg'
              },
              {
                name:'Sabrina Burns',
                title:'Support/Accounts Receivable',
                city:'Tracy California Office',
                email:'sabrina@machinerymax.com',
                facebook:'https://facebook.com',
                linkedIn:'https://www.linkedin.com/in/sabrina-burns-23420079/',
                instagram:'https://instagram.com',
                direct:'866-988-4667 Ext 706',
                cell:' 209-839-7707',
                photo:'/assets/images/aboutUs/DummyProfile.png'
              },
              {
                name:'Joe Raska',
                title:'Regional Sales',
                city:'Denver Colorado Office',
                email:'joe@machinerymax.com',
                facebook:'https://facebook.com',
                linkedIn:'https://www.linkedin.com/in/eric-beach-b9349826/',
                instagram:'https://instagram.com',
                direct:'866-988-4667 Ext 705',
                cell:' 303-349-7923',
                photo:'/assets/images/aboutUs/DummyProfile.png'
              } 
            
          
              
          ],
        stats : [
            {
              count:8253,
              title:'Auctions',
              icon:'/assets/images/sell/cart.png'
            },
            {
              count:458,
              title:'Sellers',
              icon:'/assets/images/sell/dollar_thumb.png'
            },
            {
              count:458,
              title:'Users <br/> helped',
              icon:'/assets/images/sell/headphone.png'
            },
            {
              count:116,
              title:'Employees',
              icon:'/assets/images/sell/group.png'
            },
            {
              count:4253,
              title:'Total <br/> Users',
              icon:'/assets/images/sell/laptop.png'
            },
            {
              count:450,
              title:'Problems <br/> Solved',
              icon:'/assets/images/sell/bulb.png'
            }
          ],
        testimonials:[
            {
              name:"Dave Meier",
              role:"Manager",
              companyName:"Lanz Cabinets",
              city:"Eugene, Oregon",
              photo:"/assets/images/sell/tsagana.png",
              quote:'I have worked with MachineryMax for several years to sell our excess equipment. The staff is professional and has executed each sale with no issues. Our company continues to upgrade our equipment and am sure we will call on MachineryMax again. Highly recommend their services.'
            },
            {
                name:"Bill",
                role:"Imagine Furniture Group",
                companyName:"Formerly All Wood Treasures",
                city:"Tempe, Arizona",
                photo:"/assets/images/sell/tsagana.png",
                quote:'The team at MachineryMax is completely professional. They are on time and work their tail off to make sure the machinery is the best possible light to make the most money for the selling company. The estimates are extremely accurate. The website is exemplary. Financial goals are not only met but usually exceeded and the money is delivered in a timely fashion. We at All Wood look forward to our next opportunity to work with the team at MachineryMax.'
            },{
                name:"John Grout",
                role:"",
                companyName:"Portland Closet Company",
                city:"Portland, Oregon",
                photo:"/assets/images/sell/tsagana.png",
                quote:'“Thank you to Machinery Max for help selling our two CNC machines. They took care of all the details from photographing our machines to giving input on the machine to replace the two old machines. We are hoping to find a line boring machine to purchase in a future auction.'
            },
            {
                name:"Michael Gilhood Jr",
                role:"Vice President",
                companyName:"American Wood Design",
                city:"Chester, Pennsylvania",
                photo:"/assets/images/sell/tsagana.png",
                quote:'We were referred by our financing company to MachineryMax. We needed our machine sold quickly and for the best value to make way for a new machine coming in. The team at MachineryMax were great to deal with, the communications and the expectations were right on the mark. Highly Recommend!'
            },
            {
                name:"Tim Russell",
                role:"President",
                companyName:"Executive Interiors",
                city:"Fresno, California",
                photo:"/assets/images/sell/tsagana.png",
                quote:'We have had tremendous success auctioning off equipment that we no longer need in our business. MachineryMax promptly assesses the equipment, takes pictures and handles every aspect of selling. With their extensive knowledge of the industry, the listings are very detailed. That translates to maximum value for the equipment. Machinery Max manages the collections for the auction and we then receive one check. Customers who are picking up the equipment have all necessary documentation, which makes the transfer very easy. We give MachineryMax five stars for customer service and would recommend them to anyone in the market for used machinery.'
            }
          ]
    },
    footer:{
        newsletterSubscription:'Subscribe to <br /> our Newsletter',
        siteurl:'MachineryMax.Com',
        siteMobNo:'Call: +88 659 789 874',
        copyRight:' © Copyright 2022 MachineryMax.Com. All Rights Reserved. No part of this web page may be reproduced in any way without the prior written permission of MachineryMax.Com.',
        contactLinks:{
          title:'Contact Us',
          items: [
            {
              name:'Terms and Conditions',
              link:'/'
            },
            {
              name:'Privacy Policy',
              link:'/'
            },
            {
              name:'Site Map',
              link:'/'
            }
          ]
        },
        usefulLinks : {
          title: 'Useful Links',
          items: [
            {
              name:'Help Contact',
              link: '/'
            },
            {
              name:'Technical Support',
              link:'/'
            },
            {
              name:'About Us',
              link:'/'
            }
          ]
        }
    },
    navbar:{
        sellBtn:'SELL YOUR EQUIPMENT'
    },
    financing:{
        financingTitle:'Equipment Financing',
        financingIntroduction:'Get financing for new and used equipment or technology for your business.<br />Access up to $150,000 application only, or up to $1million with financials. <br />Loan and lease options are available.',
        preApprovedBidTitle:'GET PRE-APPROVED BEFORE YOU BID!',
        processTitle:'The Process',
        step1:'1. Apply Online <br />&nbsp &nbsp It only takes 3 minutes.',
        step2:'2. Sign your documents electronically.<br/>&nbsp &nbsp Receive your contracts in a secure online format.',
        step3:'3. Get your financing.<br /> &nbsp &nbsp     Receive your contracts in a secure online format.',
        getStartedTitle:'Ready to get started?',
        applyNow:'Apply Now',
        pillsTab :  [
          {
              name: "Amount",
              limit: "Up to $150,000",
  
          },
          {
              name: "Term Length ",
              limit: "30 days - 72 months",
          },
          {
              name: "Rates ",
              limit: "As Low As 5.49 %",
          },
          {
              name: "Funding Speed ",
              limit: " As fast as 1 Day",
          }
      ]
    },
    mobile:{
        mobileAppTitle:'MachineryMax Mobile <br/>Application',
        introductionToApp:'INTRODUCING THE MACHINERYMAX MOBILE APP',
        featuresOfMobileApp:'ULTRA RESPONSIVE, REAL TIME, USER FRIENDLY MOBILE APP.',
        tutorialTitle:'QUICK TUTORIAL ON MOBILE APP AND FUNCTIONALITY',
        instructionToBrowseAllEvents:'FROM THE HOME PAGE BROWSE ALL CURRENT EVENTS.',
        eventDetailTitle:'FROM THE BROWSE EVENTS PAGE VIEW LOTS IN THAT PARTICULAR EVENT',
        eventDetails:'BY TOUCHING THE "LOTS" ICON YOU WILL ENTER INTO THE EVENT DETAILS PAGE'
    },
    pNotFound:{
        pageNotFound  :'PageNotFound'
    },
    sellEquipment:{
        sellEquipmentTitle:'Start Selling Today',
        assetValueTitle:'Ready to maximize your asset value with MachineryMax',
        consultationFormDescription:'Share your details for a free confidential consultation with our experts within 24 hours.',
        firstName:'First Name',
        lastName:'Last Name',
        city:'City',
        state:'State',
        email:'Email',
        phoneNo:'Phone',
        discussionTitle:'I would like to discuss',
        sellingPurpose: [
            'Selling my complete plant (Large plant)',
            'Selling my complete facility (Small shop)',
            'Selling my surplus equipment',
            'Sending my equipment to the MachineryMax warehouse for auction',
            'Just exploring',
        ],   
        timeframeTitle:'Timeframe',
        timeframeOptions:['Need it sold yesterday', '2-4 weeks', 'Longer than 4 weeks'],
        describePlantTitle1:'Share more details  ',
        describePlantTitle2:'More description helps us speed the process',
        contactDetails:'You can also contact us directly on phone number: <b>866-988-4667</b> Extension 1 <br/> or email us at <b>sales@machinerymax.com</b>',
        sendBtn:'Send',
        submitSucced:'Thank you',
        submitFailed:'Error occurred while sending email. Please try again later.',
        maximizeAssetMessageStrip1:' How can MachineryMax help you in maximizing the asset value  ',
        maximizeAssetMessageStrip2:' Professional approach <br/> Wide network (Over quarter million registered buyers) <br/> 10+ years in diverse industrial asset sales',
        chooseMachineryMaxTitle:'MachineryMax-A trusted partner for any industrial asset sale',
        chooseMachineryMaxDescription:'With decades of combined experience, Machinery Max has a proven track record of <b> efficiency, speed, and trust. </b> This has helped us to be the fastest growing global online industrial asset auction platform! We leverage the latest <b> digital technologies </b> to access, market, and facilitate transactions. This helps you <b> realize maximum value </b> for your asset. MachineryMax turns your sale into an event that engages the buyers and create a <b> win-win  </b> for everyone.',
        threeTiredSalesTitle:'Choose the sales model that suits you best',
        commisionDescription:'Commission: This is the most traditional auction structure and provides several different options to satisfy your needs. While there is some risk, it will provide the largest net reward.',
        netApproach:'Net Guarantee Approach: We assess your asset and provide a guaranteed net minimum amount<b>  plus </b> an agreed percentage above and beyond the minimum amount. This provides the security of knowing what you will receive with the opportunity to participate in the potential upside.',
        completeShopTitle:'Complete Shop or Just a Few Machines',
        completeShopDescription:'<b>MachineryMax has you covered! </b> <br/> Our highly experienced team is strategically located across the United States and Canada to ensure quick response. We put extra effort to clean and stage prior to professionally photographing your assets. We present your events in a 100% clean environment ensuring high engagement with prospective buyers. We also include video links of specific machines running to inspire MachineryMax confidence.',
        timeCrunchTitle:'In a Time Crunch?',
        timeCrunchDescription:'MachineryMax.Com assures any size auction from start to finish in 4 weeks! <br/> You pick your preferred sales/service model',
        commision:'Commission',
        guarantee:'Guarantee',
        cashPurchase:'Cash Purchase',
        solution:'We offer an end-to-end solution that best fits your needs and timeline',
        sellMessageStrip1:'Let the experts be your guide!',
        sellMessageStrip2:"Our experts understand the industry, your needs and have long experience of <br/> creating the win-win for each event.",
        expertGuidance:'Expert event designers',
        expertGuidanceDescription:'We have the answers ranging from your specific machinery questions to general industry trends. You will have complete knowledge and trust in the sale. Challenge us with your specific questions and be prepared to be pleasantly surprised! Our team will make your asset the star and create excitement to maximize your sale.',
        officeLocations:'We are close to you, wherever you are',
        officeLocationsDescription:'<b>9 fully staffed office locations</b> <br/> Our database includes sellers and buyers worldwide and our proprietary algorithms ensure that the right people know about your event and engage.',
        analyticalData:'Analytical Data',
        analyticalDataDescription:'Last year MachineMax had 421,000 unique visitors to its web site, with 780,000 individual sessions. Our Global span reached an audience throughout the entire world. With this data, this ensures that, <br/> We will collaborate to maximize your sales by ensuring that every buyer sees immense value in our deals <b> – win-win designs </b>',
        industriesWeServe:'Industries We Serve',
        woodWorkingIndustry:'Woodworking',
        heavyEquipmentIndustry:'Heavy Equipment',
        metalWorkingIndustry:'Metalworking',
        rollingStockIndustry:'Rolling Stock',
        endTitle:'Remember, our expertise spans any asset of value that your facility!'

    },
    accountSidebar:{
      myAccountTitle:'MY ACCOUNT',
    },
      accountAddress:{
          myAccountTitle:'MY ACCOUNT',
          summary:'SUMMARY',
          bidding:'BIDDING',
          siteFees:'SITE FEES',
          account:'ACCOUNT',
          details:'Details',
          address:'Addresses',
          creditCard:'Credit Cards',
          password:'Password',
          message:'MESSAGING',
          city:'Pune',
          name:'Aditya Shah',
          cityStatePin:'Pune, Maharashtra 411006',
          country:'INDIA',
          primaryAddress:'Primary Address',
          edit:'Edit',
          addNew:'Add New',
      },
      accountCreditCard:{
          myAccountTitle:'MY ACCOUNT',
          summary:'SUMMARY',
          bidding:'BIDDING',
          siteFees:'SITE FEES',
          account:'ACCOUNT',
          details:'Details',
          address:'Addresses',
          creditCardTitle:'Credit Cards',
          password:'Password',
          message:'MESSAGING',
          creditcard:' Credit Card',
          cardType:'Card Type',
          expires:'Expires',
          billingAddress:'Billing Address',
          addNew:'Add New',
      },
      accountDetails:{
           myAccountTitle:'MY ACCOUNT',
          summary:'SUMMARY',
          bidding:'BIDDING',
          siteFees:'SITE FEES',
          account:'ACCOUNT',
          details:'Details',
          address:'Addresses',
          creditCardTitle:'Credit Cards',
          password:'Password',
          message:'MESSAGING',
          firstName:'First Name ',
          lastName:'Last Name',
          homePhone:' Home Phone',
          mobilePhone:' Mobile Phone',
          company:'Company',
          managerName:'Manager Name',
          howDidHearAboutUs:'How did you hear about us',
          industry:'Industry',
          emailAddress:'Email Address',
          category:'Category',
          note:'Note: Click on save button after adding categories in "Category Notification Preferences" to get notification for selected categories.',
          save:'Save'
      },
      accountPassword:{
         currentPassword :'Current Password',
          note:'Your Password must be at least 6 characters long. Passwords are case sensitive',
          newPassword:'New Password',
          confirmPassword:'Confirm Password',
          changePassword:'Change Password'
      },
      accountSummary:{
          generalTitle:'General',
          generalOption1:'Listings being watched',
          generalOption2:'Listings being bid on',
          generalOption3:'Listings not won',
          generalOption4:'Listings won',
          actionNeeded:'Action Needed',
          actionOption1:'Won listings awaiting payment',
          actionOption2:'Purchase invoices awaiting payment'
      },
      home:{
        homeTitle:'Heavy Machinery Auctions Marketplace',
        latestAuctions:'LATEST AUCTIONS',
        categories:'CATEGORIES',
      },
      search:{
        noResultFound:'No results found.'
      },
      signIn:{
        userName:'Username',
        password:'Password',
        rememberMe:'Remember Me',
        enterValidCredential:'Enter valid credential ',
        forgotPassword:'Forgot Your Password?',
        register:'Register',
      },
      eventDetails:{
        managedBy:'Managed By',
        status:'Status',
        eventId:'Event ID',
        termsAndConditions:'Terms and Conditions',
        valueAddesServiceOptions:'Value added service Options',
        starts:'Starts',
        additionalInfo:'Additional Information',
        browseByCategories:'Browse By Categories',
        goBack:'Go back',
        lotFilter:'Lot filters',
        active:'Active',
        completed:'Completed',
        sort:'Sort',
        lot:'Lot',
        daysRemaining:'Days Remaining',
        currentBid:'Current Bid',
        bid:'Bid(s)',
        bidNow:'Bid Now'

      },
      latestauctions:{
        viewAllLots:'View All Lots'
      },
      topBar:{
       signin :'Sign In',
       regitration:'Register'
      }
}

export default d
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
                photo:'/assets/images/aboutUs/EricBeach.jpg'
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
                photo:'/assets/images/aboutUs/RobortSkeates.jpg'
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
                photo:''
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
                photo:''
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
        applyNow:'Apply Now'
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
        sellEquipmentTitle:'Sell Your Equipment',
        assetValueTitle:'Ready to Maximize Your Asset Value?',
        consultationFormDescription:'Fill out the form on this page for a free confidential consultation. One of our sales representatives will be in touch with you within 24 hours.',
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
        ],   
        timeframeTitle:'Timeframe',
        timeframeOptions:['Need it sold yesterday', '2-4 weeks', 'Longer than 4 weeks'],
        describePlantTitle:'Describe your plant/surplus equipment',
        contactDetails:'You can also contact us directly: <b>866-988-4667</b> <br/> Extension 1 <b>sales@machinerymax.com</b>',
        sendBtn:'Send',
        submitSucced:'Thank you',
        submitFailed:'Error occurred while sending email. Please try again later.',
        maximizeAssetMessageStrip1:' Maximize your assets with MachineryMax.Com  ',
        maximizeAssetMessageStrip2:' Reach over 255,000 immediate machinery buyers',
        chooseMachineryMaxTitle:'Have Machinery to Sell? Choose MachineryMax !',
        chooseMachineryMaxDescription:'Founded in 2011, MachineryMax has proven to be the fastest growing online auction web site in America! Utilizing the latest and greatest technology and marketing techniques, MachineryMax will turn your sale into an event that buyers will engage in - resulting in a maximum return back to you!',
        threeTiredSalesTitle:'3 Tiered Sales Approach',
        commisionDescription:'Commission: This is the most traditional auction structure and provides several different options to satisfy your needs. While there is some risk, it will provide the largest net reward.',
        netApproach:'Net Guarantee Approach: We will provide a guaranteed safety net minimum amount and will split a certain percentage above and beyond the minimum amount. This will provide the security of knowing what you will receive, with the opportunity to participate in upside potential earnings.',
        completeShopTitle:'Complete Shop or Just a Few Machines',
        completeShopDescription:'MachineryMax has you covered! We have a very experienced team on staff which covers the United States and Canada to ensure quick deployment to any project that is presented to us. What sets us apart from other auction companies is that we put in the extra effort to clean and stage prior to our professional photographer shooting all of the pictures. In other words, we present our clients events in a 100% clean environment ensuring maximum value. We will also include video links of specific machines running which will inspire confidence in our buyers and ensure maximum return.',
        timeCrunchTitle:'In a Time Crunch?',
        timeCrunchDescription:'MachineryMax.Com can perform any size auction from start to <br/> finish in 4 weeks!',
        commision:'Commission',
        guarantee:'Guarantee',
        cashPurchase:'Cash Purchase',
        solution:"We’ll offer a solution that best fits your needs and timeline",
        sellMessageStrip1:'Let the experts be your guide!',
        sellMessageStrip2:"Utilize our auction agents’ knowledge & expertise in providing you <br/> with the latest market values and machinery trends",
        expertGuidance:'Expert Guidance',
        expertGuidanceDescription:'Our team members include several years of industry experience and are capable of answering specific questions pertaining to individual machines, and assisting our clients on prescribing proper solutions for their specific applications. In other words we have extensive machinery and application knowledge and we work for our sellers behind the scenes providing necessary information about certain assets to guarantee interest and maximize results.',
        officeLocations:'7 Office Locations to Serve You',
        officeLocationsDescription:'Our database includes over 100,000 buyers worldwide and our marketing efforts ensure that the “Who’s Who” knows about the event and engages..',
        analyticalData:'Analytical Data',
        analyticalDataDescription:'In 2019 MachineryMax had 191,000 unique visitors to its web site, with 522,000 individual sessions. Our Global span reached an audience throughout the entire world. With this data, this ensures that our marketing techniques along with our database will realize maximum return for our sellers.',
        industriesWeServe:'Industries We Serve',
        woodWorkingIndustry:'Woodworking',
        heavyEquipmentIndustry:'Heavy Equipment',
        metalWorkingIndustry:'Metalworking',
        rollingStockIndustry:'Rolling Stock'

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
      }
}

export default d
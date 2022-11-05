import { LightningElement,api,wire,track } from 'lwc';
import getManagedContentByContentKeys from "@salesforce/apex/ManagedContentCtrlr.getContent";
import basePath from "@salesforce/community/basePath";

export default class Zehntech extends LightningElement {
    @api networkName;

    @api facebook;

    @api instagram;

    @api linkdin;
    
   //ContainerID
   @api contentId;
   @api contentId2;
   @api contentId3;
   @api contentId4;
   @api contentId5;
   @api contentId6;
   @api contentId7;
   @api contentId8;

  @api showButton = false;
  @api componentStyle = false;
  @track shanData;
  @track shanError;
  @api communityId;
  @api communitykey;
    //imagesURL
  @track imageUrl;
  @track imageUrl2;
  @track imageUrl3;
  @track imageUrl4;
  @track imageUrl5;
  @track imageUrl6;
  @track imageUrl7;
  @track imageUrl8;
  
     //Name
     @api name = '';
     @api name1 = '';
     @api name2 = '';
     @api name3 = '';
     @api name4 = '';
     @api name5 = '';
     @api name6 = '';
     @api name7 = '';
     
     @api position = '';
     @api position1 = '';
     @api position2 = '';
     @api position3 = '';
     @api position4 = '';
     @api position5 = '';
     @api position6 = '';
     @api position7 = '';
     
     @api email ;
     @api email1 ;
     @api email2 ;
     @api email3 ;
     @api email4 ;
     @api email5 ;
     @api email6 ;
     @api email7 ;
     
     handleClick = () => {
        console.log("You clicked me!");
        console.log("contentId", this.contentkey);
      };
    // 1 profile
      @wire(getManagedContentByContentKeys, {
        contentId: "$contentId",
        page: 0,
        pageSize: 1,
        language: "en_US",
        filterby: "",
        networkName :'$networkName',
      })
      managedContent({ error, data }) {
        console.log("it entered the function:");
        if (data) {
          if (data.source) {
            this.imageUrl =
              basePath + "/sfsites/c" + data.source.url;
          }
        } else if (error) {
          console.log("error:", error);
          // Handle the error.
          this.shanError = error;
        }   
      }
   // 2 profile
      @wire(getManagedContentByContentKeys, {
        contentId: "$contentId2",
        page: 0,
        pageSize: 1,
        language: "en_US",
        filterby: "",
        networkName :'$networkName',
      })
      managedContent2({ error, data }) {
        console.log("it entered the function:");
        if (data) {
          if (data.source) {
            this.imageUrl2 =
              basePath + "/sfsites/c" + data.source.url;
          }
        } else if (error) {
          console.log("error:", error);
          // Handle the error.
          this.shanError = error;
        }   
      }

      // 3 Profile
      @wire(getManagedContentByContentKeys, {
        contentId: "$contentId3",
        page: 0,
        pageSize: 1,
        language: "en_US",
        filterby: "",
        networkName :'$networkName',
      })
      managedContent3({ error, data }) {
        console.log("it entered the function:");
        if (data) {
          if (data.source) {
            this.imageUrl3 =
              basePath + "/sfsites/c" + data.source.url;
          }
        } else if (error) {
          console.log("error:", error);
          // Handle the error.
          this.shanError = error;
        }   
      }

      // 4 Profile
      @wire(getManagedContentByContentKeys, {
        contentId: "$contentId4",
        page: 0,
        pageSize: 1,
        language: "en_US",
        filterby: "",
        networkName :'$networkName',
      })
      managedContent4({ error, data }) {
        console.log("it entered the function:");
        if (data) {
          if (data.source) {
            this.imageUrl4 =
              basePath + "/sfsites/c" + data.source.url;
          }
        } else if (error) {
          console.log("error:", error);
          // Handle the error.
          this.shanError = error;
        }   
      }
      // 5 Profile
      @wire(getManagedContentByContentKeys, {
        contentId: "$contentId5",
        page: 0,
        pageSize: 1,
        language: "en_US",
        filterby: "",
        networkName :'$networkName',
      })
      managedContent5({ error, data }) {
        console.log("it entered the function:");
        if (data) {
          if (data.source) {
            this.imageUrl5 =
              basePath + "/sfsites/c" + data.source.url;
          }
        } else if (error) {
          console.log("error:", error);
          // Handle the error.
          this.shanError = error;
        }   
      }
      // 6 Profile
      @wire(getManagedContentByContentKeys, {
        contentId: "$contentId6",
        page: 0,
        pageSize: 1,
        language: "en_US",
        filterby: "",
        networkName :'$networkName',
      })
      managedContent6({ error, data }) {
        console.log("it entered the function:");
        if (data) {
          if (data.source) {
            this.imageUrl6 =
              basePath + "/sfsites/c" + data.source.url;
          }
        } else if (error) {
          console.log("error:", error);
          // Handle the error.
          this.shanError = error;
        }   
      }
      // 7 Profile
      @wire(getManagedContentByContentKeys, {
        contentId: "$contentId7",
        page: 0,
        pageSize: 1,
        language: "en_US",
        filterby: "",
        networkName :'$networkName',
      })
      managedContent7({ error, data }) {
        console.log("it entered the function:");
        if (data) {
          if (data.source) {
            this.imageUrl7 =
              basePath + "/sfsites/c" + data.source.url;
          }
        } else if (error) {
          console.log("error:", error);
          // Handle the error.
          this.shanError = error;
        }   
      }
      // 8 Profile
      @wire(getManagedContentByContentKeys, {
        contentId: "$contentId8",
        page: 0,
        pageSize: 1,
        language: "en_US",
        filterby: "",
        networkName :'$networkName',
      })
      managedContent8({ error, data }) {
        console.log("it entered the function:");
        if (data) {
          if (data.source) {
            this.imageUrl8 =
              basePath + "/sfsites/c" + data.source.url;
          }
        } else if (error) {
          console.log("error:", error);
          // Handle the error.
          this.shanError = error;
        }   
      }


      
     
     currentPos = 0;
     elements = [];
     directionToNext = true;
     constructor() {
         super();
         for (let i = 0; i < 9; i++) {
             this.elements.push({
                 'txt': `Div number : ${i+1}`,
             });
         }
     }
     
    
     
     connectedCallback() {
        
         // eslint-disable-next-line @lwc/lwc/no-async-operation
         setInterval(() => {
             let c = 0;
             if (Math.floor(this.elements.length / 4) === (this.elements.length / 4)) {
                 c = 1;
             }
             if (this.currentPos === 0) {
                 this.directionToNext = true;
             } else if (this.currentPos === (-(Math.floor(this.elements.length / 4)) + c)) {
                 this.directionToNext = false;
             }
             if (this.directionToNext) {
                 this.next();
             } else {
                 this.previous();
             }
         }, 4000);
     }

     previous() {
         this.directionToNext = false;
         if (this.currentPos < 0) {
             const a = (this.currentPos) * 100;
             const b = (this.currentPos + 1) * 100;
             let firstDiv = this.template.querySelector(`[data-id="firstDiv"]`);
 
             firstDiv.animate([{
                     transform: `translateX(${a}%)`
                 },
                 {
                     transform: `translateX(${b}%)`
                 }
             ], {
                 duration: 500,
                 fill: "forwards"
             });
             this.currentPos++;
         }
 
     }
     next() {
        
         this.directionToNext = true;
         let c = 0;

        if(this.elements != null || this.elements != ''){

            if (Math.floor(this.elements.length / 4) === (this.elements.length / 4)) {
                c = 1;
            }
            if (this.currentPos > (-(Math.floor(this.elements.length / 4)) + c)) {
                const a = (this.currentPos) * 100;
                const b = (this.currentPos - 1) * 100;
                let firstDiv = this.template.querySelector(`[data-id="firstDiv"]`);
                firstDiv.animate([{
                        transform: `translateX(${a}%)`
                    },
                    {
                        transform: `translateX(${b}%)`
                    }
                ], {
                    duration: 500,
                    fill: "forwards"
                });
                this.currentPos--;
            }
        }

 
     }
     
}

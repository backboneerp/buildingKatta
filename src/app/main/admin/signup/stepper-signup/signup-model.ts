export class SignUpModel{
    private email:string;
    private regID:Number;
    private password:string;
    private name:string;
    private streetName:string;
    private landmark:string;
    private country:string;
    private state:string;
    private city:string;
    private societyName:string;
    private societyContactPerson:string;
    private societyEmail:string;
    private societyLandline:string;
    private societyIdNo:string;
    private accountType:string;
    public constructor(){
        this.email='';
        this.regID=0;
        this.password='';
        this.name='';
        this.streetName='';
        this.landmark='';
        this.country='';
        this.state='';
        this.city='';
        this.societyName='';
        this.societyContactPerson='';
        this.societyEmail='';
        this.societyLandline='';
        this.societyIdNo='';
        this.accountType='';
    }
    public get Email(){
       return  this.email;
    }
    public set Email(email:string){
        this.email=email;
    }
    public get RegID(){
        return this.regID;
    }
    public set RegID(regID:Number){
        this.regID;
    }
    public get Password(){return this.password;}
    public set Password(password:string){this.password=password;}

    public get Name(){return this.name;}
    public set Name(name:string){this.name=name;}

    public get StreetName(){return this.streetName;}
    public set StreetName(streetName:string){this.streetName=streetName;}

    public get Landmark(){return this.landmark;}
    public set Landmark(landmark:string){this.landmark=landmark;}

    public get Country(){return this.country;} 
    public set Country(country:string){this.country=country;}
    
    public get State(){return this.state;}
    public set State(state:string){this.state=this.state;}

    public get City(){return this.city;}
    public set City(city:string){this.city=city;}

    public get SocietyName(){return this.societyName;}
    public set SocietyName(societyName:string){this.societyName=societyName;}

    public get SocietyContactPerson(){return this.societyContactPerson;}
    public set SocietyContactPerson(societyContactPerson:string){this.societyContactPerson=societyContactPerson;}

    public get SocietyEmail(){return this.societyEmail;}
    public set SocietyEmail(societyEmail:string){this.societyEmail=societyEmail;}

    public get SocietyLandline(){return this.societyLandline;}
    public set SocietyLandline(societyLandline:string){this.societyLandline=societyLandline;}

    public get SocietyIdNo(){return this.societyIdNo;}
    public set SocietyIdNo(societyIdNo:string){this.societyIdNo=societyIdNo;}

    public get AccountType(){return this.accountType;}
    public set AccountType(accountType:string){this.accountType=accountType;}

}



class Job{
    constructor(name, industry, requireDegree, field, salary){
        this.name = name;
        this.industry = industry;
        this.requireDegree = requireDegree;
        this.field = field;
        this.salary = salary;
    }

    getName(){
        return this.name;
    }

    getFieldAndIndustry(){
        return `${this.field} and ${this.industry}`;
    }
    
    getSalary(){
        return this.salary;
    }
}

const job1 = new Job("Lawyer", "Judicial", "Bachelor", "Criminal Justice", 127990);
const job2 = new Job("Software Developer", "Technology", "None", "Web Development", 110140);
const job3 = new Job("Data Scientist", "Technology", "None", "Data", 108660);

console.log(job1.getName(), job1.getSalary());
console.log(job2.getName(), job2.getSalary());


class SoftwareDeveloper extends Job{
    constructor(name, industry, requireDegree, field, salary, language){
        super(name, industry, requireDegree, field, salary);
        this.language = language;
    }
}

const Developer = new SoftwareDeveloper("Software Developer", "Technology", "None", "Web Development", 110140, "JavaScript");

console.log(Developer.getName(), Developer.getFieldAndIndustry());
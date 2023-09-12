export class CourseService{

    private course:string[]=["Core Java",'Advanced Java','Spring Boot','Hibernate','Angular 12','Jenkings','Docker','AWS'];

    getCourse(){
        return this.course;
    }

}
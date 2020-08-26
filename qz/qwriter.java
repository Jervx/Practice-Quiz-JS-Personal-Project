import java.io.File;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

class qwriter {
    public static void main(String [] args){
        String Subname;
        String det;
        String qno;

        Scanner reader = new Scanner(System.in);

        System.out.println("Enter Subject Name: ");
        Subname = reader.nextLine();
        System.out.println("Enter Subject Details: ");
        det = reader.nextLine();
        System.out.println("Enter Subject Quiz No: ");
        qno = reader.nextLine();

        List <question> questions = new ArrayList<question>();

        char _R_ = '-';

        while(_R_ != 'x'){
            questions.add(new question(reader));
            System.out.println("Enter x to stop adding");
            try{_R_ = reader.nextLine().charAt(0);}catch(Exception e){}
        }

        File f = new File(Subname+".json");
        try{
            PrintWriter out = new PrintWriter(f);
            out.printf("{\n\t\"Subj_Name\":\"%s\",",Subname);
            out.printf("\n\t\"Quiz_Details\":\"%s\",",det);
            out.printf("\n\t\"Quiz_No\":\"%s\",",qno);
            out.printf("\n\t\"Quiz_Questions\":[\n\t\t");

            for(int y = 0; y < questions.size(); y++){
                out.printf("{\n\t\t\t\"question\":\"%s\",\n\t\t\t\"answer\":[",questions.get(y).getQuestion());
                List<String> answ = questions.get(y).getAnswers();
                for(int x = 0; x < answ.size(); x++){
                    out.printf("\"%s\"%s",answ.get(x),(x == answ.size()-1? "":","));
                }
                out.printf("]\n\t\t}%s",(y == questions.size()-1?"":","));
            }

            out.printf("\n\t]\n}");

            out.flush();
            out.close();
            reader.close();
        }catch(Exception e){e.printStackTrace();}
    }
}

class question{
    private List <String> answers = new ArrayList<String>();
    private String Question;
    public question(Scanner reader){

        System.out.println("Enter Question: ");
        Question = reader.nextLine();
        System.out.println("Enter answers: ");

        String [] ans = reader.nextLine().replaceAll("\\s","").split(",");
        
        for(String a : ans)
            answers.add(a);

        System.out.println("\n\n\n\n\n\n\n\n\n\n\n\n\n");
    }

    public List <String> getAnswers(){
        return answers;
    }

    public String getQuestion(){
        return Question;
    }
}
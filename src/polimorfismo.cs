/**
 * Polimorfismo: Capacidad que tienen los Objetos para manipular distintos tipos de
 * datos de manera uniforme
 * Sobrecarga: metodos que pueden tomar parametros con diferentes tipos de datos
 * 
 */

 class Program {
    public static void Main (string[] args) {
        Console.WriteLine ("Hello World");

        Program program = new Program();
        Console.WriteLine(program.CountItems(30000));           //Imprime 5
        Console.WriteLine(program.CountItems("Hola Mundo"));    //Imprime 10 

        Console.WriteLine(program.Sum(10, 20));                 //Imprime 30
        Console.WriteLine(program.Sum(10, 20, 30));             //Imprime 60
    }
 }

 //overloading
public int CountItems(int x) {
    return x.ToString().length;
}

public int CountItems(string x) {
    return x.length;
}

public int Sum(int x, int y) {
    return Sum(x, y, 0);
}

public int Sum(int x, int y, int z) {
    return x + y + z;
}
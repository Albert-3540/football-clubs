using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello World");
    }
}

string name = "Albert";
int age = 20;
double height = 1.75;
bool isStudent = true;

Console.WriteLine(name);
Console.WriteLine(age);
Console.WriteLine(height);
Console.WriteLine(isStudent);

Console.Write("Enter your name: ");
string name = Console.ReadLine();

Console.WriteLine("Welcome " + name);


double weight = 70;
double height = 1.75;

double bmi = weight / (height * height);

string category;

if (bmi < 18.5)
{
    category = "Underweight";
}
else if (bmi < 25)
{
    category = "Normal Weight";
}
else if (bmi < 30)
{
    category = "Overweight";
}
else
{
    category = "Obese";
}

Console.WriteLine("BMI = " + bmi.ToString("F2"));
Console.WriteLine("Category = " + category);
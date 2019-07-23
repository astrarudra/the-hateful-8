using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
//Request library
using System.Net;
using System.IO;

  public class SumExample  
   {  
     public static void Main(string[] args)  
      {     //Method to initialize new web request objects
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create("http://api.worldbank.org/v2/indicator/NY.GDP.MKTP.CD?format=json");
            //To set the type of decompression that is used
            request.AutomaticDecompression = DecompressionMethods.GZip | DecompressionMethods.Deflate;
            //Send request to the server by calling the method returns an object containing the server's response.
            using(HttpWebResponse response = (HttpWebResponse)request.GetResponse())
            using(Stream stream = response.GetResponseStream())
            using(StreamReader reader = new StreamReader(stream))
            { 
                string UserInput;
                Console.Write("Enter Your Country: ");
                UserInput = Console.ReadLine(); //User Input

                Console.Write(reader.ReadToEnd());
                var toArray = reader.ReadToEnd().Split(','); //To split values inside the array
                if(toArray.Any(name => name == UserInput)) //condition to check with user input
                {Console.Write(reader.ReadToEnd());} 

            }      
     }  

  }  
  
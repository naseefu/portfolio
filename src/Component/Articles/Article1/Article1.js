import React from "react";
import { FaCopy } from "react-icons/fa";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Navbar from "../../Navbar/Navbar";
import '../article.css'
import ImageBanner from "../ImageBanner";
import ScrollToTop from "../../Navbar/Scroller";
import Articles from "../Articles";
import me from '../../../Images/IMG_4273.jpg'

const Article1 = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const classExample = `public class Person {
    private final String name;
    private final int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
    
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Person person = (Person) o;
        return age == person.age && Objects.equals(name, person.name);
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }
}`;

  const recordExample = `public record Person(String name, int age) {
    // All getters, constructors, equals, hashCode, and toString
    // methods are automatically generated!
    
    // You can still add additional methods if needed:
    public String getUpperCaseName() {
        return name.toUpperCase();
    }
}`;

const usingClass = `public class Employee {
    private final String id;
    private final String name;

    public Employee(String id, String name) {
        this.id = id;
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    @Override
    public String toString() {
        return "Employee{id='" + id + "', name='" + name + "'}";
    }
}`

const usingRecord = `public record Employee(String id, String name) {}`

const mainClass = `public class Main {
    public static void main(String[] args) {
        Employee emp1 = new Employee("E001", "Alice");
        System.out.println(emp1);
    }
}`

  return (
    <div className="min-h-screen text-white text-left">
        <ScrollToTop/>
        <div>
            <ImageBanner link="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
        </div>
        <div className="bg-neutral-950">
        <div className="absolute top-1 w-[100%] mb-10">
            <Navbar/>
        </div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="px-5 md:px-20 mx-auto -mt-20 max-w-[1400px]"
      >
        <h1 className="text-5xl font-bold mb-6 text-white">Java Class vs Java Record</h1>
        
        <motion.section 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
        <p className="text-[grey] text-[14px] pb-8 mb-5 mt-0">Java, as a versatile programming language, has continuously evolved to include new 
            features that simplify development and improve code readability. One such feature introduced in Java 14 (as a preview) and officially in Java 16 is the record. This article explores the key differences between Java classes and records, their advantages, and practical examples.</p>

          <div className="flex gap-4 items-center mb-10">
            <div>
              <img src={me} className="h-[40px] rounded-3xl" alt="dp"/>
            </div>
            <div>
              <p>Naseefu Karumannil</p>
              <p className="text-gray-400 text-[13px]">December 30, 2024</p>
            </div>
          </div>
          <h2 className="text-3xl font-semibold mb-4 cliptext">1. Introduction to Java Classes</h2>
          <p className="mb-4 text-[grey] pb-8">
          A Java class is the blueprint for creating objects. It encapsulates data and methods that operate on that data. 
          Classes are versatile and can represent complex structures, relationships, and behaviors.</p>
          <div className=" py-3 max-w-[fit-content] rounded-lg mb-6 relative ">
            <button 
              onClick={() => copyToClipboard(classExample)}
              className="absolute top-[8%] right-[5%] text-gray-400 hover:text-white"
            >
              <FaCopy size={16} />
            </button>
            {/* <p className="text-[#4cffb4] mb-2">Person.java (Class)</p> */}
            <SyntaxHighlighter language="java" style={vscDarkPlus} className="rounded-md programblock ">
              {classExample}
            </SyntaxHighlighter>
          </div>
          <div className="mt-10">
            <h1 className="mb-3 text-[20px] font-[600]">Pros of Java Classes:</h1>
            <li className="text-gray-300">Highly flexible</li>
            <li className="text-gray-300">Can contain mutable or immutable fields</li>
            <li className="text-gray-300">Support inheritance</li>
            <li className="text-gray-300">Can have complex methods and behaviors</li>
          </div>
          <div className="mt-10 ">
            <h1 className="mb-3 text-[20px] font-[600]">Cons of Java Classes:</h1>
            <li className="text-gray-300">Boilerplate code (e.g., getters, setters, toString, equals, hashCode)</li>
            <li className="text-gray-300">Tedious when used for simple data-carrying objects</li>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-semibold mb-6 mt-20 cliptext">2. Introduction to Java Records</h2>
          <p className="mb-4 text-[grey]">
          A record is a special type of class introduced to reduce boilerplate code for simple data-carrying classes. Records are immutable by default and are primarily used to model plain data.</p>
          <div className="py-6 rounded-lg mb-6 relative max-w-[fit-content]  shadow-lg">
            <button 
              onClick={() => copyToClipboard(recordExample)}
              className="absolute top-[25%] right-[5%] text-gray-400 hover:text-white"
            >
              <FaCopy size={15} />
            </button>
            <p className="text-green-400 mb-2">Person.java (Record)</p>
            <SyntaxHighlighter language="java" style={vscDarkPlus} className="rounded-md programblock">
              {recordExample}
            </SyntaxHighlighter>
          </div>
          <div>
            <p className="text-[20px] font-[500]">The compiler automatically generates:</p>
            <div className="mt-4 text-gray-300">
              <li>A Constructor.</li>
              <li>Getter methods.</li>
              <li>toString, equals, and hashCode methods.</li>
            </div>
          </div>
          <div className="flex items-start flex-wrap justify-between">
          <div className="mt-10 mr-10">
            <h1 className="mb-3 text-[20px] font-[600]">Pros of Java Classes:</h1>
            <li className="text-gray-300">Less boilerplate code</li>
            <li className="text-gray-300">Automatic immutability</li>
            <li className="text-gray-300">Built-in implementations of equals, hashCode, and toString</li>
          </div>
          <div className="mt-10 ">
            <h1 className="mb-3 text-[20px] font-[600]">Cons of Java Classes:</h1>
            <li className="text-gray-300">No support for inheritance</li>
            <li className="text-gray-300">Immutable fields only</li>
            <li className="text-gray-300">Limited flexibility compared to traditional classes</li>
          </div></div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-400">Key Differences</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{duration:0.3}}
              className="bg-[rgba(255,255,255,0.1)] p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Class Features</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Mutable by default</li>
                <li>Explicit getters/setters needed</li>
                <li>Manual implementation of utility methods</li>
                <li>More verbose syntax</li>
                <li>Flexible inheritance</li>
              </ul>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{duration:0.3}}
              className="bg-[rgba(255,255,255,0.1)] p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-400">Record Features</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Immutable by default</li>
                <li>Automatic getters</li>
                <li>Built-in toString, equals, hashCode</li>
                <li>Concise syntax</li>
                <li>Cannot extend other classes</li>
              </ul>
            </motion.div>
          </div>
          <div className="mt-20">
          <h2 className="text-3xl font-semibold mb-4 cliptext">3. Practical Example: Class vs Record</h2>
          <div className="md:flex w-[100%] flex-wrap gap-5 justify-between items-start">
          <div>
            <div>
            <p className="text-[18px] font-[500] mt-8">Example using Class</p>
            </div>
            <div className=" py-1 max-w-[fit-content] overflow-hidden rounded-lg mb-6 relative ">
             <button 
              onClick={() => copyToClipboard(usingClass)}
              className="absolute top-[8%] right-[5%] text-gray-400 hover:text-white"
             >
              <FaCopy size={16} />
              </button>
              <SyntaxHighlighter language="java" style={vscDarkPlus} className="w-[100%] md:w-auto overflow-x-auto rounded-md programblock ">
              {usingClass}
              </SyntaxHighlighter>
            </div>
          </div>
          <div>
          <div>
            <div>
            <p className="text-[18px] font-[500] mt-8">Example using Record</p>
            </div>
            <div className=" py-1 max-w-[fit-content] rounded-lg mb-6 relative ">
              <SyntaxHighlighter language="java" style={vscDarkPlus} className="rounded-md programblock ">
              {usingRecord}
              </SyntaxHighlighter>
            </div>
          </div>
          <div>
            <div>
            <p className="text-[18px] font-[500] mt-8">Usage in Main Method</p>
            </div>
            <div className=" py-1 max-w-[fit-content] rounded-lg mb-6 relative ">
            <button 
              onClick={() => copyToClipboard(mainClass)}
              className="absolute top-[14%] right-[5%] text-gray-400 hover:text-white"
             >
              <FaCopy size={14} />
              </button>
              <SyntaxHighlighter language="java" style={vscDarkPlus} className="rounded-md programblock ">
              {mainClass}
              </SyntaxHighlighter>
              <p className="text-gray-300">Both produce the same result, but the record version is significantly more concise.</p>
            </div>
            </div>
          </div>
          </div>
          </div>
          <div className="mt-20">
          <h2 className="text-3xl font-semibold mb-4 cliptext">4. When to Use Classes vs Records</h2>
          <div className="flex gap-10 items-start justify-between mt-10 flex-wrap">
            <div className="">
            <h1 className="text-[20px] mb-5 font-[500]">Use Classes when:</h1>
            <div className="text-gray-300">
              <li>You need inheritance</li>
              <li>Fields need to be mutable</li>
              <li>The class represents complex behaviors beyond just holding data</li>
            </div>
          </div>
          <div>
            <h1 className="text-[20px] mb-5 font-[500]">Use Records when:</h1>
            <div className="text-gray-300">
              <li>You only need to store immutable data</li>
              <li>You want a concise syntax for data models</li>
              <li>Boilerplate reduction is a priority</li>
            </div>
          </div></div>
          <div className="mt-20">
          <h2 className="text-3xl font-semibold mb-4 w-[fit-content] text-transparent bg-gradient-to-r from-green-100 via-green-400 to-gray-200 bg-clip-text cliptext">5. Conclusion</h2>
          <p className="text-[grey] mt-10">Java records are an excellent addition for scenarios where immutability and simplicity are key. However, they are not a one-size-fits-all replacement for traditional classes. Understanding the strengths and limitations of both is essential to making informed architectural decisions.</p>
          <p className="text-[grey] mt-4">By choosing the right tool for the right job, developers can write cleaner, more maintainable, and efficient Java code.</p>
          </div>
          </div>
        </motion.section>
        
        <div className="mt-20 pb-10">
            <p className="text-[35px] text-transparent bg-gradient-to-r from-green-100 via-green-400 to-gray-200 bg-clip-text  font-bold">Other posts that you might <span className="text-gray-500 font-normal" style={{textDecoration:'line-through'}}>like </span><span className="italic"> love</span></p>
            <Articles web={1}/>
        </div>
       
      </motion.div>


    </div></div>
  );
};

export default Article1;
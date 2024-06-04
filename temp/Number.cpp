/*Rob A Bank solution

    There are 3 ways to solve this problem...
    1. Brute Force approach
    2. Constructive approach
    3. Array approach


    I am only including the code of 2nd approach..which i personally would use if
    i were to solve a problem like this..

    If you want we can discuss the other approaches offline.


*/


/*
    Brute force : 

        we can make a function similar to checkCondition function to count occurances
        of 8's and 9's in number..then all we need is a loop, to iterate and increment
        the number if condition isnt met..

        This is a good solution..the only problem is, if input is 1,00,000..the computer 
        has to loop for 7,88,999 times...and each time it has to check condition and increment..

        This is not an effective solution..


    Constructive approach...if you understand the problem properly..you'll see
    that numbers 8,9,89,98,889 act like binary numbers..just like
    0,1,01,10,100...so..instead of treating the 8's and 9's as integers..you can treat them as 
    binary...Thats why i used a threshold function to convert n to binary..

    then i increment and check just like brute force...if solution is found..
    i convert binary back to 9 and 8 and print the output.

*/


#include <iostream>
#include <bitset>
#include <string>

using namespace std;


// Function to increment a binary number represented as a string
void incrementBinary(string &binary) {
    int carry = 1;
    for (int i = binary.size() - 1; i >= 0 && carry; --i) {
        if (binary[i] == '0') {
            binary[i] = '1';
            carry = 0;
        } else {
            binary[i] = '0';
            carry = 1;
        }
    }
    if (carry)
        binary = '1' + binary;
}

bool checkCondition(string n)
{
    int c1 = 0,c0 = 0;
    for(char i : n)
    {
        if(i == '1')
        {
            c1++;
        }
        else
        {
            c0++;
        }
    }

    return (c1 == c0);
}



int main() 
{

    string n;
    cin >> n;
    string binaryInput = "";

    if(n.length()%2==1)
    {
        binaryInput+='0';
    }
    for(char i : n)
    {
        if((i - '0') > 8)
        {
            binaryInput+="1";
        }
        else
        {
            binaryInput+="0";
        }
    }

    while(!checkCondition(binaryInput))
    {
        incrementBinary(binaryInput);
    }

    string output="";

    for(char i : binaryInput)
    {
        if(i == '0')
        {
            output+='8';
        }
        else
        {
            output+='9';
        }
    }
    
    cout << output;

    return 0;
}

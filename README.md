# The Golden Record
**or (DNA Encoding Algorithm for the Project Molecular Encoded Storage for Space Exploration)**

## Project Overview
The Molecular Encoded Storage for Space Exploration (MESSE) explores the possibility of preserving human knowledge in space DNA by implementing an algorithm to encode the musical notation into DNA storage and launch the pieces of DNA into space on a sub-orbital flight.

- [Spaceth.co - Project Overview](https://spaceth.co/messe/)
- [Ars Electronica - MESSE](https://ars.electronica.art/keplersgardens/messe/)

## Process
### Text-based Musical Notation Scheme
The notation is a concatenation of musical notes defined using two fundamental music note conditions, i.e., pitch and duration, in the form of string. The string is then compressed using the tendency of repeat patterns in a musical score which gives the capability to define a symbol used in the compressed result instead of long repeats chunks. Subsequently, The musical notation string is mapped to a binary string.

### Optimized Musical Notation to Binaries
Similar to character encoding schemes in computers, such as ASCII or UTF-8, six bits are used to define one musical notation element. Since it is enough to store four-octaves notes, and essential musical components, which are enough for a proof of concept experiment and can easily be referred to as and converted into three nitrogenous bases. The larger n-bits size notation can be discussed in the future.

### Error Correction Algorithm
By conditions and limitations of DNA Storage methods, there is a probability of mutations in the strand. Therefore, the usage of the error correction scheme is advised by a number of recent papers. As **Reed-Solomon algorithm** was utilized in the [nature protocol](https://doi.org/10.1038/s41596-019-0244-5) earlier this year, we also employ this correction scheme using [cho45's](https://github.com/cho45/reedsolomon.js/) Javascript implementation of ZXing Reed-Solomon library.

### Randomization
To strengthen the bond of the strand, we average the content of four types of nitrogenous bases by XOR the binaries content with another pre-created binary string. The Pseudorandom Number Generator (PRNG) is used to create a binary string, we select the xorshift algorithm to do the procedure, in contrast to the Mersenne Twister in the aforementioned protocol.

### Conversion to Nitrogenous Bases
The binaries will be mapped into four types of the nitrogenous base in DNA: Adenine, (A) Thymine (T), Cytosine (C), and Guanine (G). Two bits of string are converted to one base.

## Sample
In the MESSE project, we stored the song **ความฝันกับจักรวาล** (The dream and the universe) by a Thai famous rock band **Bodyslam**. By using such procedures, we successfully encoded the musical notation of the song within 640 Base Pairs of a DNA strand.

We use 9111934 and 20121996 which can be referred to as Carl Sagan's Birthdate and Date of Death as a seed for a randomization algorithm. As a tribute to him, in which many of his projects and writings ideate this work, and also have great influences as an inspiration and a motivation for our team. 

*(It may be noted that the distribution of 01 content the seed generated is tested before the usage in the final product, and the result are in acceptable rate)*

The final algorithmic output was cut into three smaller DNA strands with the addition of an overlapping part to thereafter conduct biomolecular experiments such as the Gibson Assembly, prior to and following the sub-orbital launch which will take place on Blue Origin NS-13 in which DNA strands will be exposed to microgravity, radiation, and another space environment variables.

## References
- [Nature - Reading and writing digital data in DNA](https://doi.org/10.1038/s41596-019-0244-5)
- [Science - Next-Generation Digital Information Storage in DNA](10.1126/science.1226355)
- [Nature - Towards practical, high-capacity, low-maintenance information storage in synthesized DNA](https://doi.org/10.1038/nature11875)

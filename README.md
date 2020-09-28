# The Golden Record
**or (DNA Encoding Algorithm for the Project Molecular Encoded Storage for Space Exploration)**

## Project Overview
The Molecular Encoded Storage for Space Exploration (MESSE) explores the possibility of preserving human knowledge in space DNA by implementing an algorithm to encode the musical notation into DNA storage and launch the pieces of DNA into space on a sub-orbital flight.

- [Spaceth.co - Project Overview](https://spaceth.co/messe/)
- [Ars Electronica - MESSE](https://ars.electronica.art/keplersgardens/messe/)

## Process
### Text-based Musical Notation Scheme
### Musical Notation Optimization Algorithm
### Optimized Musical Notation to Binaries
### Error Correction Algorithm
By conditions and limitations of DNA Storage methods, there tends to be a considerable probability of mutations in the strand. Therefore, the usage of the error correction scheme is advised by a number of modern documents. As **Reed-Solomon algorithm** was utilized in the [nature protocol](https://doi.org/10.1038/s41596-019-0244-5) earlier this year, We also employ this correction scheme using [cho45's](https://github.com/cho45/reedsolomon.js/) Javascript implementation of ZXing Reed-Solomon library.
### Randomization
To strengthen the bond of the strand, we average the content of four types of nitrogenous bases by XOR the binaries content with another pre-created binary string. The Pseudorandom Number Generator (PRNG) is used to create a binary string, we select the xorshift algorithm, in contrast to the Mersenne Twister in the aforementioned protocol.
### Final binaries content to Nitrogenous Bases

## Sample
In the MESSE project, we stored the song **ความฝันกับจักรวาล** (The dream and the universe) by a Thai famous rock band **Bodyslam**. By using such procedures, we successfully encoded the musical notation of the song within 640 Base Pairs of a DNA strand.

The final algorithmic output was cut into 3 smaller DNA strands with the addition of an overlapping part to thereafter conduct biomolecular experiments such as the Gibson Assembly, prior to and following the sub-orbital launch which will take place on Blue Origin NS-13 in which DNA strands will be exposed to microgravity, radiation, and another space environment variables.
## References
- [Nature - Reading and writing digital data in DNA](https://doi.org/10.1038/s41596-019-0244-5)
- [Science - Next-Generation Digital Information Storage in DNA](10.1126/science.1226355)
- [Nature - Towards practical, high-capacity, low-maintenance information storage in synthesized DNA](https://doi.org/10.1038/nature11875)

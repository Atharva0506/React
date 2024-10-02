import React,{useState} from 'react'

export const Country = () => {
    const countries = [
        "United States", "Canada", "Brazil", "Mexico", "Argentina",
        "United Kingdom", "Germany", "France", "Italy", "Spain",
        "Russia", "China", "India", "Japan", "South Korea",
        "Australia", "New Zealand", "South Africa", "Nigeria", "Egypt",
        "Saudi Arabia", "Turkey", "Israel", "Iran", "Iraq",
        "Sweden", "Norway", "Denmark", "Finland", "Netherlands",
        "Belgium", "Switzerland", "Austria", "Poland", "Ukraine",
        "Greece", "Portugal", "Czech Republic", "Hungary", "Romania",
        "Thailand", "Vietnam", "Malaysia", "Singapore", "Indonesia",
        "Philippines", "Pakistan", "Bangladesh", "Sri Lanka", "Nepal"
      ];
    
      const [searchTerm, setSearchTerm] = useState<string>("");
      const [filteredCountries, setFilteredCountries] = useState(countries);
    
    
      const handleSearchChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);
    
        // Filter countries based on the search term
        const filtered = countries.filter((country) =>
          country.toLowerCase().includes(value)
        );
        setFilteredCountries(filtered);
      };
    
  return (
    <div>
    <h2>Search Countries</h2>
    <input
      type="text"
      placeholder="Search for a country..."
      value={searchTerm}
      onChange={handleSearchChange}
    />
    <ul>
      {filteredCountries.map((country, index) => (
        <li key={index}>{country}</li>
      ))}
    </ul>
  </div>
  )
}

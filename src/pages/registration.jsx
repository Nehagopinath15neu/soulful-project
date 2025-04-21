import React, { useState, useEffect } from "react";

const Registration = () => {
  const [submittedData, setSubmittedData] = useState(null);
  const [selectedPackages, setSelectedPackages] = useState({
    kyoto: false,
    santorini: false,
    sedona: false,
    paris: false,
    bali: false,
    goa: false
  });
  const [numberOfPeople, setNumberOfPeople] = useState(2);
  const [totalCost, setTotalCost] = useState(0);

  // Package pricing data
  const packagePrices = {
    kyoto: { basePrice: 899, additionalPersonCost: 299 },
    santorini: { basePrice: 899, additionalPersonCost: 299 },
    sedona: { basePrice: 899, additionalPersonCost: 299 },
    paris: { basePrice: 999, additionalPersonCost: 349 },
    bali: { basePrice: 899, additionalPersonCost: 299 },
    goa: { basePrice: 799, additionalPersonCost: 249 }
  };

  // Handle package selection change
  const handlePackageChange = (e) => {
    const { name, checked } = e.target;
    setSelectedPackages(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  // Handle number of people change
  const handlePeopleChange = (e) => {
    setNumberOfPeople(parseInt(e.target.value, 10));
  };

  // Calculate total cost whenever selections change
  useEffect(() => {
    let cost = 0;
    
    // Add up the cost for each selected package
    Object.keys(selectedPackages).forEach(pkg => {
      if (selectedPackages[pkg]) {
        // Base price for 2 people
        cost += packagePrices[pkg].basePrice;
        
        // Add cost for additional people beyond 2
        if (numberOfPeople > 2 && numberOfPeople <= 5) {
          cost += packagePrices[pkg].additionalPersonCost * (numberOfPeople - 2);
        }
      }
    });
    
    setTotalCost(cost);
  }, [selectedPackages, numberOfPeople]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    // Process the form data
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    
    // Add selected destinations
    const selectedDestinations = [];
    Object.keys(selectedPackages).forEach(pkg => {
      if (selectedPackages[pkg]) {
        // Format destination names nicely
        const destinationNames = {
          kyoto: 'Kyoto Cultural Experience',
          santorini: 'Santorini Island Paradise',
          sedona: 'Sedona Red Rock Adventure',
          paris: 'Paris: City of Light',
          bali: 'Bali: Island of the Gods',
          goa: 'Goa: Beaches & Spices'
        };
        selectedDestinations.push(destinationNames[pkg]);
      }
    });
    
    // Add destinations and total cost to the data object
    if (selectedDestinations.length > 0) {
      data['Destinations'] = selectedDestinations.join(', ');
      data['Total Cost'] = `$${totalCost}`;
    }

    setSubmittedData(data);
    form.reset();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
      {!submittedData && (
        <form onSubmit={handleSubmit} className="space-y-12 p-8 bg-white rounded-lg">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-8 text-center">
            Registration Form
          </h1>

          {/* Personal Information */}
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold text-gray-900">Personal Information</h2>
            <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {[
                { label: "First name", name: "first-name", type: "text", colSpan: 3 },
                { label: "Last name", name: "last-name", type: "text", colSpan: 3 },
                { label: "Phone number", name: "phone-number", type: "tel", colSpan: 3 },
                { label: "Email address", name: "email", type: "email", colSpan: 4 },
                { label: "Street address", name: "street-address", type: "text", colSpan: 6 },
                { label: "City", name: "city", type: "text", colSpan: 2 },
                { label: "State / Province", name: "region", type: "text", colSpan: 2 },
                { label: "ZIP / Postal code", name: "postal-code", type: "text", colSpan: 2 },
              ].map((field, idx) => (
                <div key={idx} className={`sm:col-span-${field.colSpan}`}>
                  <label htmlFor={field.name} className="block text-sm font-medium text-gray-900">
                    {field.label}
                  </label>
                  <div className="mt-2">
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-3 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600"
                    />
                  </div>
                </div>
              ))}

              <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium text-gray-900">Country</label>
                <div className="mt-2">
                  <select id="country" name="country" className="block w-full rounded-md py-1.5 px-3 mt-2 ring-1 ring-inset ring-gray-300 focus:ring-indigo-600">
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Destination Info */}
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold text-gray-900">Top Destinations</h2>
            <p className="mt-1 text-sm text-gray-600">Select the destinations you're interested in registering for.</p>

            <div className="mt-6 sm:col-span-3">
              <label htmlFor="number-of-people" className="block text-sm font-medium text-gray-900">Number of People</label>
              <div className="mt-2">
                <select 
                  id="number-of-people" 
                  name="number-of-people" 
                  value={numberOfPeople}
                  onChange={handlePeopleChange}
                  className="block w-full rounded-md py-1.5 px-3 mt-2 ring-1 ring-inset ring-gray-300 focus:ring-indigo-600"
                >
                  <option value="2">2 People - Base Price</option>
                  <option value="3">3 People (Additional person cost varies by package)</option>
                  <option value="4">4 People (Additional person cost varies by package)</option>
                  <option value="5">5 People (Additional person cost varies by package)</option>
                  <option value="6">6+ People (Contact us for group rates)</option>
                </select>
                <p className="text-xs text-gray-500 mt-1">Additional person cost varies by package ($249-$349 per person)</p>
              </div>
            </div>

            {/* Checkboxes */}
            <div className="mt-10 space-y-6">
              <fieldset>
                <legend className="text-sm font-semibold text-gray-900">Available Packages</legend>
                <div className="mt-6 space-y-6">
                  {[
                    {
                      id: "kyoto",
                      label: "Kyoto Cultural Experience",
                      description: "7 days exploring ancient temples, traditional tea ceremonies, and cherry blossoms - Starting at $899 for two people",
                    },
                    {
                      id: "santorini",
                      label: "Santorini Island Paradise",
                      description: "5 days of Mediterranean bliss, sunset views, and white-washed villages - Starting at $899 for two people",
                    },
                    {
                      id: "sedona",
                      label: "Sedona Red Rock Adventure",
                      description: "6 days of hiking, spiritual vortexes, and desert beauty - Starting at $899 for two people",
                    },
                    {
                      id: "paris",
                      label: "Paris: City of Light",
                      description: "5 days immersed in art, iconic landmarks, and exquisite French cuisine - Starting at $999 for two people",
                    },
                    {
                      id: "bali",
                      label: "Bali: Island of the Gods",
                      description: "5 days exploring sacred temples, rice terraces, and pristine beaches - Starting at $899 for two people",
                    },
                    {
                      id: "goa",
                      label: "Goa: Beaches & Spices",
                      description: "5 days of coastal relaxation, Portuguese heritage, and vibrant markets - Starting at $799 for two people",
                    },
                  ].map((pkg) => (
                    <div key={pkg.id} className="flex gap-3">
                      <input 
                        id={pkg.id} 
                        name={pkg.id} 
                        type="checkbox" 
                        checked={selectedPackages[pkg.id]} 
                        onChange={handlePackageChange} 
                        className="h-5 w-5 text-indigo-600" 
                      />
                      <div className="text-sm">
                        <label htmlFor={pkg.id} className="font-medium text-gray-900">{pkg.label}</label>
                        <p className="text-gray-500">{pkg.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
          </div>

          {/* Cost Estimation */}
          <div className="pt-10 pb-6">
            <h2 className="text-base font-semibold text-gray-900 mb-4">Cost Estimation</h2>
            
            {totalCost > 0 ? (
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">Selected Packages:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    {Object.keys(selectedPackages).map(pkg => (
                      selectedPackages[pkg] && (
                        <li key={pkg} className="text-gray-600">
                          <span className="font-medium">{pkg.charAt(0).toUpperCase() + pkg.slice(1)}</span>: ${packagePrices[pkg].basePrice} base price
                          {numberOfPeople > 2 && numberOfPeople <= 5 && (
                            <span> + ${packagePrices[pkg].additionalPersonCost * (numberOfPeople - 2)} for {numberOfPeople - 2} additional {numberOfPeople - 2 === 1 ? 'person' : 'people'}</span>
                          )}
                        </li>
                      )
                    ))}
                  </ul>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-900">Total Estimated Cost:</span>
                      <span className="text-2xl font-bold text-indigo-600">${totalCost}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">This is an estimated cost based on your selections. Final pricing may vary.</p>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-gray-600">Select at least one package to see cost estimation.</p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-end gap-x-6 pt-6">
            <a href="/" className="text-sm font-semibold text-gray-900 hover:text-gray-700">Cancel</a>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus:outline-indigo-600"
              disabled={totalCost === 0}
            >
              Save
            </button>
          </div>
        </form>
      )}

      {/* Submitted Data */}
      {submittedData && (
        <div className="bg-white rounded-lg shadow-sm p-8 mt-12">
          <div className="text-center mb-8">
            <div className="mx-auto h-12 w-12 text-green-600 mb-4">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Registration Successful!</h3>
            <p className="mt-2 text-gray-600">
              Thank you for registering with Soulful Sojourns. We'll contact you within 24–48 hours.
            </p>
          </div>
          <div className="border-t border-gray-200 pt-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Registration Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(submittedData).map(([key, value], i) => {
                // Special formatting for destinations
                if (key === 'Destinations') {
                  return (
                    <div key={i} className="flex flex-col md:col-span-2">
                      <span className="text-sm font-medium text-gray-500">Destinations</span>
                      <div className="mt-1">
                        {value.split(', ').map((destination, index) => (
                          <div key={index} className="text-base font-medium text-gray-900 mb-1">{destination}</div>
                        ))}
                      </div>
                    </div>
                  );
                }
                // Skip individual package checkboxes from display
                else if (['kyoto', 'santorini', 'sedona', 'paris', 'bali', 'goa'].includes(key)) {
                  return null;
                }
                // Regular formatting for other fields
                else {
                  return (
                    <div key={i} className="flex flex-col">
                      <span className="text-sm font-medium text-gray-500">{key.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                      <span className="mt-1 text-base font-medium text-gray-900">{value}</span>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Registration;

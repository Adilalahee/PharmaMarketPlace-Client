import React, { useState } from 'react';

const AskAdvertise = () => {
    const [medicines, setMedicines] = useState([]); // Holds medicines added by the seller
    const [sliderAds, setSliderAds] = useState([]); // Holds medicines currently in the slider
    const [newMedicine, setNewMedicine] = useState({ name: '', image: '', description: '' });
    const [modalOpen, setModalOpen] = useState(false);
  
    // Handle adding new medicine to the list
    const handleAddMedicine = () => {
      if (newMedicine.name && newMedicine.image && newMedicine.description) {
        setMedicines([...medicines, { ...newMedicine, id: Date.now(), inSlider: false }]);
        setNewMedicine({ name: '', image: '', description: '' });
        closeModal();
      }
    };
  
    // Toggle medicine in/out of the advertisement slider
    const toggleInSlider = (id) => {
      setMedicines(
        medicines.map((medicine) =>
          medicine.id === id ? { ...medicine, inSlider: !medicine.inSlider } : medicine
        )
      );
      if (sliderAds.some((ad) => ad.id === id)) {
        setSliderAds(sliderAds.filter((ad) => ad.id !== id)); // Remove from slider
      } else {
        setSliderAds([...sliderAds, medicines.find((medicine) => medicine.id === id)]); // Add to slider
      }
    };
  
    // Close modal
    const closeModal = () => setModalOpen(false);
    return (
  <>
   <div className="p-6 space-y-6">
      {/* Referred Medicines List */}
      <div className="border-b pb-4">
        <h2 className="text-xl font-semibold">Seller's Referred Medicines</h2>
        <ul className="mt-4 space-y-4">
          {medicines.map((med) => (
            <li key={med.id} className="flex justify-between items-center">
              <div className="flex items-center">
                <img src={med.image} alt={med.name} className="w-12 h-12 rounded-md mr-3" />
                <span>{med.name}</span>
              </div>
              <button
                className={`badge ${med.inSlider ? 'badge-success' : 'badge-warning'} cursor-pointer`}
                onClick={() => toggleInSlider(med.id)}
              >
                {med.inSlider ? 'In Slider' : 'Not In Slider'}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Advertisement Slider */}
      <div className="border-b pb-4">
        <h2 className="text-xl font-semibold">Advertisement Slider</h2>
        <div className="mt-4 flex space-x-4 overflow-x-auto">
          {sliderAds.map((ad) => (
            <div key={ad.id} className="w-60 h-36 bg-gray-200 rounded-md p-4">
              <img src={ad.image} alt={ad.description} className="w-full h-24 object-cover rounded-md" />
              <p className="mt-2 text-sm">{ad.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Add Medicine Button */}
      <div className="text-right">
        <button className="btn btn-primary" onClick={() => setModalOpen(true)}>
          Add Medicine
        </button>
      </div>

      {/* Modal for Adding Medicine */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-lg font-semibold mb-4">Add Medicine</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Medicine Name</label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={newMedicine.name}
                  onChange={(e) => setNewMedicine({ ...newMedicine, name: e.target.value })}
                  placeholder="Enter medicine name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Medicine Image URL</label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={newMedicine.image}
                  onChange={(e) => setNewMedicine({ ...newMedicine, image: e.target.value })}
                  placeholder="Enter image URL"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Description</label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={newMedicine.description}
                  onChange={(e) => setNewMedicine({ ...newMedicine, description: e.target.value })}
                  placeholder="Enter description"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-between">
              <button className="btn btn-secondary" onClick={closeModal}>
                Cancel
              </button>
              <button className="btn btn-primary" onClick={handleAddMedicine}>
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  </>
    );
};

export default AskAdvertise;
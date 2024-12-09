import { Modal } from "antd";
import { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const DriverVolunteers = () => {

    const [modal2Open, setModal2Open] = useState(false);

    const [formData, setFormData] = useState({
      first: "",
      last: "",
      Holocaust: "",
      date: "",
      number: "",
      alternateNumber: "",
      adress: "",
      apartment: "",
      city: "",
      state: "",
      zipcode: "",
      date: "",
      timeFrom: "",
      timeTo: "",
      deliveryDrivers: "",
      household: "",
      bags: "",
      deitary: "",
      deliveryIns: "",
      warehouseVolunteers: "",
    });
    const [errors, setErrors] = useState({});
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      setErrors({ ...errors, [name]: "" });
    };
  
    const validateForm = () => {
      let formErrors = {};
      if (!formData.first.trim()) formErrors.first = "Event first is required.";
      if (!formData.last.trim()) formErrors.last = "Event last is required.";
      if (!formData.Holocaust.trim())
        formErrors.Holocaust = "Holocaust is required.";
  
      if (!formData.date.trim()) formErrors.date = "date is required.";
      if (!formData.number.trim())
        formErrors.number = "Event number is required.";
      if (!formData.alternateNumber.trim())
        formErrors.alternateNumber = "alternateNumber number is required.";
  
      if (!formData.adress.trim())
        formErrors.adress = "Event adress is required.";
      if (!formData.apartment.trim())
        formErrors.apartment = "Event apartment is required.";
      if (!formData.city) formErrors.city = "Event city is required.";
      if (!formData.state) formErrors.state = "Event state is required.";
  
      if (!formData.zipcode) formErrors.zipcode = "zipcode is required.";
      if (!formData.date) formErrors.date = "Date is required.";
      if (!formData.timeFrom) formErrors.timeFrom = "Start time is required.";
      if (!formData.timeTo) formErrors.timeTo = "End time is required.";
      if (!formData.deliveryDrivers)
        formErrors.deliveryDrivers = "Delivery drivers count is required.";
  
      if (!formData.household)
        formErrors.household = "household count is required.";
  
      if (!formData.deitary)
        formErrors.deitary = "deitary Restrictions count is required.";
  
      if (!formData.bags)
        formErrors.bags = "bags Restrictions count is required.";
  
      if (!formData.deliveryIns)
        formErrors.deliveryIns = "Delivery Instruction count is required.";
  
      if (!formData.warehouseVolunteers)
        formErrors.warehouseVolunteers = "Volunteers count is required.";
  
      setErrors(formErrors);
      return Object.keys(formErrors).length === 0;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        console.log("Form Data:", formData);
  
        setModal2Open(false);
        setFormData({
          first: "",
          last: "",
          Holocaust: "",
          date: "",
          number: "",
          alternateNumber: "",
          adress: "",
          apartment: "",
          city: "",
          state: "",
          zipcode: "",
          date: "",
          timeFrom: "",
          timeTo: "",
          deliveryDrivers: "",
          household: "",
          bags: "",
          deitary: "",
          deliveryIns: "",
          warehouseVolunteers: "",
        });
      }
    };

    const eventData = [
        {
          clientName: "Alena Molin",
          phone: "01694349873",
          email: "foisal@gmail.com",
          clientDelivery: "None",
          status: "Active",
          bags: "1",
        },
        {
          clientName: "Jose Root",
          phone: "01693454373",
          email: "ssdf#gmail.com",
          clientDelivery: "Mitzvah Sunday Week 1",
          status: "Inactive",
          bags: "6",
        },
        {
          clientName: "Julite Khanom",
          phone: "01694349873",
          email: "ddfosis@gmail.com",
          clientDelivery: "Mitzvah Sunday Week 2",
          status: "Active",
          bags: "3",
        },
        {
          clientName: "Alena Molin",
          phone: "01694349873",
          email: "foisal@gmail.com",
          clientDelivery: "None",
          status: "Active",
          bags: "1",
        },
        {
          clientName: "Jose Root",
          phone: "01693454373",
          email: "ssdf#gmail.com",
          clientDelivery: "Mitzvah Sunday Week 1",
          status: "Inactive",
          bags: "6",
        },
        {
          clientName: "Julite Khanom",
          phone: "01694349873",
          email: "ddfosis@gmail.com",
          clientDelivery: "Mitzvah Sunday Week 2",
          status: "Active",
          bags: "3",
        },
        {
          clientName: "Alena Molin",
          phone: "01694349873",
          email: "foisal@gmail.com",
          clientDelivery: "None",
          status: "Active",
          bags: "1",
        },
        {
          clientName: "Jose Root",
          phone: "01693454373",
          email: "ssdf#gmail.com",
          clientDelivery: "Mitzvah Sunday Week 1",
          status: "Inactive",
          bags: "6",
        },
        {
          clientName: "Julite Khanom",
          phone: "01694349873",
          email: "ddfosis@gmail.com",
          clientDelivery: "Mitzvah Sunday Week 2",
          status: "Active",
          bags: "3",
        },
        {
          clientName: "Alena Molin",
          phone: "01694349873",
          email: "foisal@gmail.com",
          clientDelivery: "None",
          status: "Active",
          bags: "1",
        },
        {
          clientName: "Jose Root",
          phone: "01693454373",
          email: "ssdf#gmail.com",
          clientDelivery: "Mitzvah Sunday Week 1",
          status: "Inactive",
          bags: "6",
        },
        {
          clientName: "Julite Khanom",
          phone: "01694349873",
          email: "ddfosis@gmail.com",
          clientDelivery: "Mitzvah Sunday Week 2",
          status: "Active",
          bags: "3",
        },
      ];
    
      const [currentPage, setCurrentPage] = useState(1);
    
      const itemsPerPage = 10;
      const totalPages = Math.ceil(eventData.length / itemsPerPage);
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const currentEvents = eventData.slice(startIndex, endIndex);
    
      // Pagination handlers
      const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
      };
    
      const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
      };
    
      const handlePageChange = (page) => {
        setCurrentPage(page);
      };
    return (
        <div>
            <div>
      <div className="mt-2 mb-5 mx-5 lg:flex justify-between">
        {/* Search Box */}
        <div className="flex items-center border-b border-gray-300 px-1 w-full mr-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M11 2a9 9 0 106.32 15.49l4.58 4.58a1 1 0 001.4-1.42l-4.58-4.58A9 9 0 0011 2zm0 2a7 7 0 110 14 7 7 0 010-14z" />
          </svg>
          <input
            type="text"
            placeholder="Search Event"
            className="ml-2 flex-1 outline-none text-sm bg-white text-gray-700 placeholder-gray-400"
          />
        </div>

        <div className="lg:flex mt-3 gap-3 ">
          {/* Tabs for List and Calendar View */}

          {/* Filters */}

          <div>
            <button
              onClick={() => setModal2Open(true)}
              className="w-[150px] bg-[#234E6F] rounded-full py-2 text-white"
            >
              +Add Volunteer
            </button>
          </div>
        </div>
      </div>

      <div className="mx-5">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left text-sm font-medium">
                Volunteer Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium">
                Phone #
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium">
                Alternate Phone #
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium">Vip</th>
              <th className="px-4 py-2 text-left text-sm font-medium">
                Volunteer Type
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium">
                Volunteer Grup
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {currentEvents.map((event, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
              >
                <td className="px-4 py-3 text-sm">{event.clientName}</td>
                <td className="px-4 py-3 text-sm">{event.phone}</td>
                <td className="px-4 py-3 text-sm">{event.email}</td>
                <td className="px-4 py-3 text-sm ">
                  <span className="">
                    <span className=" gap-1 rounded-full  ">
                      <select
                        className="bg-[#EDEDED] px-2  p-1 rounded-full text-[#234E6F]"
                        name="None"
                        id=""
                      >
                        <option value="None">None</option>
                        <option value="mitzvah Monday">mitzvah Monday</option>
                        <option value="mitzvah Sunday">mitzvah Sunday</option>
                      </select>
                    </span>
                  </span>
                </td>
                <td className="px-4 py-3 text-sm flex">
                  <span className="flex">
                    <span className=" gap-1 rounded-full  flex">
                      <select
                        className="bg-[#EDEDED] px-2  p-1 rounded-full text-[#234E6F]"
                        name="None"
                        id=""
                      >
                        <option value="None">None</option>
                        <option value="mitzvah Monday">mitzvah Monday</option>
                        <option value="mitzvah Sunday">mitzvah Sunday</option>
                      </select>
                    </span>
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">{event.bags}</td>
                <td className="px-4 py-3 text-sm text-gray-500 flex justify-end">
                  <details className="dropdown ">
                    <summary className="btn m-1 bg-[#00000000] -my-3 px-0 shadow-none hover:bg-[#ffffff00] border-none">
                      <BiDotsVerticalRounded />
                    </summary>
                    <ul className="menu dropdown-content bg-white text-black rounded z-[1] right-0 w-44 p-2 shadow">
                      <li>
                        <a onClick={() => setModal2Open(true)}>Edit</a>
                      </li>
                      <li>
                        <a>Delete</a>
                      </li>
                    </ul>
                  </details>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4 px-4">
        <span className="text-sm text-gray-700">
          Showing {startIndex + 1} to {Math.min(endIndex, eventData.length)} of{" "}
          {eventData.length} items
        </span>
        <div className="flex gap-2">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <IoIosArrowBack />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 rounded-md ${
                currentPage === page
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>

    <Modal
        title="Add Event"
        centered
        open={modal2Open}
        onCancel={() => {
          setModal2Open(false);
          setFormData({
            first: "",
            last: "",
            Holocaust: "",
            number: "",
            alternateNumber: "",
            adress: "",
            apartment: "",
            city: "",
            state: "",
            zipcode: "",
            date: "",
            timeFrom: "",
            timeTo: "",
            deliveryDrivers: "",
            household: "",
            bags: "",
            deitary: "",
            deliveryIns: "",
            warehouseVolunteers: "",
          });
          setErrors({});
        }}
        footer={[
          <button
            key="save"
            onClick={handleSubmit}
            className="bg-[#234E6F] text-white rounded-full px-5 py-2"
          >
            Save
          </button>,
        ]}
      >
        <form>
          <div className="mt-4">
            <div className="flex gap-3">
              <label htmlFor="first">
                <span className="font-semibold">First Name</span>
                <input
                  className="w-full border bg-white border-neutral-400 mt-1 py-2 rounded-md mb-1"
                  type="text"
                  name="first"
                  id="first"
                  value={formData.first}
                  onChange={handleInputChange}
                />
                {errors.first && (
                  <p className="text-red-500 text-sm">{errors.first}</p>
                )}
              </label>

              <label htmlFor="last">
                <span className="font-semibold">Last Name</span>
                <input
                  className="w-full border bg-white border-neutral-400 mt-1 py-2 rounded-md mb-1"
                  type="text"
                  name="last"
                  id="last"
                  value={formData.last}
                  onChange={handleInputChange}
                />
                {errors.last && (
                  <p className="text-red-500 text-sm">{errors.last}</p>
                )}
              </label>
            </div>

            

            <label htmlFor="apartment">
              <span className="font-semibold">Apartment, suite, etc. *</span>
              <input
                className="w-full border bg-white border-neutral-400 mt-1 py-2 rounded-md mb-1"
                type="text"
                name="apartment"
                id="apartment"
                value={formData.apartment}
                onChange={handleInputChange}
              />
              {errors.apartment && (
                <p className="text-red-500 text-sm">{errors.apartment}</p>
              )}
            </label>

            <label htmlFor="number">
              <span className="font-semibold">Phone Number</span>
              <input
                className="w-full border bg-white border-neutral-400 mt-1 py-2 rounded-md mb-1"
                type="text"
                name="number"
                id="number"
                value={formData.number}
                onChange={handleInputChange}
              />
              {errors.number && (
                <p className="text-red-500 text-sm">{errors.number}</p>
              )}
            </label>



            

            <label htmlFor="adress">
              <span className="font-semibold">Adress</span>
              <input
                className="w-full border bg-white border-neutral-400 mt-1 py-2 rounded-md mb-1"
                type="text"
                name="adress"
                id="adress"
                value={formData.adress}
                onChange={handleInputChange}
              />
              {errors.adress && (
                <p className="text-red-500 text-sm">{errors.adress}</p>
              )}
            </label>

            

            
          </div>

          

          <label htmlFor="Holocaust">
              <span className="font-semibold">Holocaust Survivor</span>
              <select
                className="w-full  border bg-white border-neutral-400 rounded-md py-2"
                name="Holocaust"
                id="Holocaust"
                value={formData.Holocaust}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
              {errors.Holocaust && (
                <p className="text-red-500 text-sm">{errors.Holocaust}</p>
              )}
            </label>

          
          <div className="  mt-1">
            <label htmlFor="deliveryDrivers">
              <span className="font-semibold">Delivery Drivers Needed</span>
              <select
                className="w-full border mb-2 bg-white border-neutral-400 rounded-md py-2"
                name="deliveryDrivers"
                id="deliveryDrivers"
                value={formData.deliveryDrivers}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
              {errors.deliveryDrivers && (
                <p className="text-red-500 text-sm">{errors.deliveryDrivers}</p>
              )}
            </label>
          </div>
        </form>
      </Modal>
        </div>
    );
};

export default DriverVolunteers;
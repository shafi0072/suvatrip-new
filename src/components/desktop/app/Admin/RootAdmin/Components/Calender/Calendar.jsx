// import React, { useState } from 'react';

// const Calendar = () => {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleDateClick = (date) => {
//     setSelectedDate(date);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className=''>
//         <div className='text-center'>
//       <h1>Calendar</h1>
//       <div className="grid grid-cols-7 gap-2">
//         {Array.from({ length: 31 }, (_, index) => index + 1).map((date) => (
//           <div
//             key={date}
//             className="p-2 border border-gray-300 cursor-pointer"
//             onClick={() => handleDateClick(date)}
//           >
//             {date}
//           </div>
//         ))}
//       </div>
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
//           <div className="bg-white p-4">
//             <h2>Date: {selectedDate}</h2>
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//               onClick={closeModal}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//     </div>
//   );
// };

// export default Calendar;

// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import Modal from 'react-modal';

// // Modal.setAppElement('#root');

// const EventCalendar = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [eventText, setEventText] = useState('');

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//     setIsModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//     setEventText('');
//   };

//   const handleEventSave = () => {
//     // Implement your logic to save the event
//     console.log(`Event on ${selectedDate.toDateString()}: ${eventText}`);
//     setIsModalOpen(false);
//     setEventText('');
//   };

//   return (
//     <div>
//       <div className=''>
//         <Calendar onChange={handleDateChange} value={selectedDate} />
//         <Modal
//           isOpen={isModalOpen}
//           onRequestClose={handleModalClose}
//           contentLabel="Add Event"
//         >
//           <h2>Add Event</h2>
//           <div className='ml-10 mt-5'>
//             <input
//               type="text"
//               placeholder="Event details"
//               value={eventText}
//               onChange={(e) => setEventText(e.target.value)}
//             />
//           </div>
//           <div className='ml-10 mt-2 gap-2'>
//             <button className='btn btn-warning mr-2' onClick={handleEventSave}>Save</button>
//             <button className='btn btn-warning' onClick={handleModalClose}>Cancel</button>
//           </div>
//         </Modal>
//       </div>
//     </div>
//   );
// };

// export default EventCalendar;

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Badge from '@mui/material/Badge';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import CheckIcon from '@mui/icons-material/Check';
import FullCalendar from '@fullcalendar/react';
import { Box } from '@mui/material';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';

const Calendar = ({ hotelInfo }) => {
	const [value, setValue] = useState(new Date());
	const [highlightedDays, setHighlightedDays] = useState([1, 2, 13]);
	const [currentEvents, setCurrentEvents] = useState([]);

	const handleDateClick = (selected) => {
		const title = prompt('Please enter a new title for your event');
		const calendarApi = selected.view.calendar;
		calendarApi.unselect();

		if (title) {
			calendarApi.addEvent({
				id: `${selected.dateStr}-${title}`,
				title,
				start: selected.startStr,
				end: selected.endStr,
				allDay: selected.allDay,
			});
		}
	};

	const handleEventClick = (selected) => {
		if (
			window.confirm(
				`Are you sure you want to delete the event '${selected.event.title}'`
			)
		) {
			selected.event.remove();
		}
	};

	const priceCategory = [];

	for (let i = 0; i < hotelInfo.rooms.length; i++) {
		for (let j = 0; j < hotelInfo.rooms[i].priceCategory.length; j++) {
			priceCategory.push(hotelInfo.rooms[i].priceCategory[j]);
		}
	}

	const events = [];

	for (let i = 0; i < priceCategory.length; i++) {
		const event = {
			price: priceCategory[i].Per_Night,
			start: priceCategory[i].scheduleBasedPrice.startDate,
			end: priceCategory[i].scheduleBasedPrice.endDate,
		};

		events.push(event);
	}
	console.log(events);

	return (
		// CALANDER
		<Box
			className="w-100 items-center"
			display="flex"
			height="auto"
			ml="15px"
			justifyContent="center"
			alignItems="center"
		>
			<FullCalendar
				height="100vh"
				plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
				headerToolbar={{
					left: 'prev,next today',
					center: 'title',
					right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
				}}
				initialView="dayGridMonth"
				editable={true}
				selectable={true}
				selectMirror={true}
				dayMaxEvents={true}
				select={handleDateClick}
				eventClick={handleEventClick}
				eventsSet={(events) => setCurrentEvents(events)}
				initialEvents={[
					{
						id: '12315',
						title: 'All-day event',
						date: '2022-09-14',
					},
					{
						id: '5123',
						title: 'Timed event',
						date: '2022-09-28',
					},
				]}
			/>
		</Box>

		// <LocalizationProvider dateAdapter={AdapterDateFns}>
		//   <StaticDatePicker
		//     // mask='____/__/__'
		//     variant='static'
		//     orientation='portrait'
		//     value={value}
		//     disableFuture
		//     onChange={(newValue) => setValue(newValue)}
		//     renderInput={(params) => {
		//       <TextField {...params} />;
		//     }}
		//     renderDay={(day, _value, DayComponentProps) => {
		//       const isSelected =
		//         !DayComponentProps.outsideCurrentMonth &&
		//         highlightedDays.indexOf(day.getDate()) >= 0;

		//       return (
		//         <Badge
		//           key={day.toString()}
		//           overlap='circular'
		//           badgeContent={isSelected ? <CheckIcon color='red' /> : undefined}
		//         >
		//           <PickersDay {...DayComponentProps} />
		//         </Badge>
		//       );
		//     }}
		//   />
		// </LocalizationProvider>
	);
};

export default Calendar;

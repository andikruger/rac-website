import React, { useState } from "react";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { registerLicense } from "@syncfusion/ej2-base";
import { scheduleData } from "./dummy";

// eslint-disable-next-line react/destructuring-assignment
registerLicense(
  "ORg4AjUWIQA/Gnt2VVhjQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0RgWX9acHNXRWFaUEc="
);
const Scheduler = () => {
  const [scheduleObj, setScheduleObj] = useState();

  function onEventRendered(args) {
    let categoryColor = args.data.CategoryColor;
    args.element.style.backgroundColor = categoryColor;
  }

  return (
    <div className="m-2 md:m-10 mt-32 p-2 md:p-10 bg-white rounded-3xl">
      <ScheduleComponent
        height="650px"
        allowDragAndDrop={false}
        allowResizing={false}
        ref={(schedule) => setScheduleObj(schedule)}
        cssClass="e-customClass"
        readonly={true}
        selectedDate={selectedDate}
        eventSettings={{ dataSource: scheduleData }}
        eventRendered={onEventRendered.bind(this)}
      >
        <ViewsDirective>
          {["Day", "Week", "WorkWeek", "Month", "Agenda"].map((item) => (
            <ViewDirective key={item} option={item} />
          ))}
        </ViewsDirective>
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Scheduler;

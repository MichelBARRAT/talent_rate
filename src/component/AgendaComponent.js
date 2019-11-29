import React from 'react';

import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';

class AgendaComponent extends React.Component {
    render() {
        return <ScheduleComponent>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
    }
}

export default AgendaComponent;
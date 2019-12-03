import React from 'react';
import { L10n } from '@syncfusion/ej2-base';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';

L10n.load({
    "en-US": {
        "schedule": {
            "title": "Professeur",
            "location": "Cour"

        },
        "recurrenceeditor": {
            "none": "None"
        }
    }
});

class AgendaComponent extends React.Component, ODataV4Adaptor {
    constructor() {
        super(...arguments);
        this.dataManager = new DataManager({
            url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
            adaptor: new ODataV4Adaptor
        });
        this.dataQuery = new Query().from("Events");


    }

    render() {
        return <ScheduleComponent startHour={'08:00'} endHour={'18:00'} firstDayOfWeek={1}>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
    };

}

export default AgendaComponent;

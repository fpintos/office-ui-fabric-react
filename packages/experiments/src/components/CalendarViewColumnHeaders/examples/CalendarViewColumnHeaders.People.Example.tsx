import * as React from 'react';
import { CalendarViewColumnHeaders } from '../../CalendarViewColumnHeaders';
import { Persona, PersonaSize, PersonaPresence, PersonaInitialsColor } from 'office-ui-fabric-react/lib/Persona';
import { TestImages } from 'office-ui-fabric-react/lib/common/TestImages';

const examplePersonas = [
  {
    imageUrl: TestImages.personaMale,
    imageInitials: 'AR',
    primaryText: 'Aaron Reid',
    presence: PersonaPresence.offline
  },
  {
    imageUrl: TestImages.personaFemale,
    imageInitials: 'AL',
    primaryText: 'Annie Lindqvist',
    presence: PersonaPresence.online
  },
  {
    imageInitials: 'AL',
    primaryText: 'Alex Lundberg',
    initialsColor: PersonaInitialsColor.red,
    presence: PersonaPresence.offline
  },
  {
    imageInitials: 'CB',
    primaryText: 'Christian Bergqvist',
    initialsColor: PersonaInitialsColor.green,
  }
];

export class CalendarViewColumnHeadersPeopleExample extends React.Component {
  public render(): JSX.Element {
    const columnHeaders = examplePersonas.map(
      persona => <Persona {...persona} size={ PersonaSize.size32 } />
    );

    return (
      <CalendarViewColumnHeaders>
        { columnHeaders }
      </ CalendarViewColumnHeaders>
    );
  }
}

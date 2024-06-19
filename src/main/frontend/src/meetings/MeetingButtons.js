export default function MeetingButtons({username, meeting, onDelete, onSignOut, onSignIn}) {
    let isAttending = false;
//    console.log(meeting.participants[0].login, username)
    if (meeting.participants.some(p => p.login === username)) {
      isAttending=true
    }
    const isEmpty = meeting.participants.length === 0;

    return <>
        {
            isAttending
                ? <button onClick={onSignOut}>Wypisz się</button>
                : <button onClick={onSignIn}>Zapisz się</button>
        }
        {isEmpty && <button onClick={onDelete} className="button-outline">Usuń puste spotkanie</button>}
    </>
        ;
}

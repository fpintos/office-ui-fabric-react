# Announced Component

The Announced component aims to fill several of the accessibility gaps that exist in various web application experiences. It provides text for the screen reader in certain scenarios that are lacking comprehensive updates, particularly those showing the completion status or progress of operation(s).

Some real-world applications of the component include copying, uploading, deleting, or moving many files, "lazy loading" of page sections that do not appear all at once, and appearance of search results.

## Use cases

### Updated actions being executed
Small operations like editing text, or deletion that are short enough that they do not require a status during progress.

#### Examples
Editing text, deletion

| Do                | Don't             |
| ----------------- | ----------------- |
| Announce success  | Announce repeated status unless the time has gone over a specified threshold. |

#### Scenarios
1. User renames a file

    When the file is renamed successfully, use the Announced component, coupled with a key, to announce the message immediately. Providing a key will ensure that the announcement is re-read.

    Usage:
    ```
    <Announced key={announcementId} message='Mail deleted' />
    ```

    By default, the announced component should wait for .5 seconds.

2. User deletes more than 1 email in a short amount of time

    In this case, we want the Announced component to debounce so that there is only one status message per sequence of operations instead of one per individual operation. The `delay` prop specifies the time at which the Announced component will kick of a status message if one has not been sent in that amount of time. This way, the component can still push relevant status messages without making them overwhelming.

    Usage:
    ```
    <Announced key={sequenceId} message='5 mails deleted' delay={500} />
    ```

***
### Asynchronous page/page content loading
"Lazy loading" of page sections that do not appear all at once.

#### Examples
Pages, custom lists and libraries

| Do                | Don't             |
| ----------------- | ----------------- |
| Announce progress after a specified threshold or if a user focuses on a section.  | Announce when each individual page section has loaded, unless it has been over a specified period of time or if focus is placed on the section.  |

#### Scenarios
1. User attempts to focus on a section of the page that is still loading

    Usage:
    ```
    <Announced key={announcementId} message='Cards are loading' />
    ```

***
### Bulk async long running operations
Operations that require multiple sub operations, such as the simultaneous uploading of several files.

#### Examples
Copying, uploading, or moving many items

| Do                | Don't             |
| ----------------- | ----------------- |
| Announce overall status without focus  | Announce sub-operations unless focus is placed on the items  |

#### Scenarios
1. User moves 100 items to another folder

    Similar to some previous scenarios mentioned above, we want to debounce so that there is only one annouced message per group of items instead of per item operation. It would not be desirable to read off when every single item is moved to the other folder. Instead, a user can provide a message and a `delay` prop that sends out a status message after that specified amount of time has passed.

    Usage:
    ```
    <Announced key={sequenceId} message='30 items moved' delay={500} />
    ```

    Announced would also handle the "completed" status.

***
### **TODO Needs Review**: Asynchronous resolution of contacts or search results
Appearance of search like results such as in contact fields, or search boxes.

#### Examples
To: line in mail clients, search boxes

| Do                | Don't             |
| ----------------- | ----------------- |
|                   |                   |

#### Scenarios
1. User types the letter 'A' into a picker

    The component should announce the number of search results found.

    Usage:
    ```
    <Announced key={announcementId} message='7 items found' />
    ```

    By default, the announced component should wait for .5 seconds before sending out the status message, in case the user keeps typing in the picker, to avoid reading unneccessary updates.

***
## Props

`key`

A unique key for Announced

`message`

The status message provided as screen reader output

`delay`

The time to wait until providing another status message for the screen reader to avoid overwhelming the user with extraneous updates.

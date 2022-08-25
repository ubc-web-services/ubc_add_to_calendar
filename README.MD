# Usage

This module adds three content variables to the 'ubc_event' content type, that will be available in the node template:

- google_cal_link
- ical_link
- outlook_link

## Required fields

The fields this module relys on are hard coded, but they are in the default `ubc_event` content type. They are:

- title
- body
- field_event_location (and address field)
- field_event_date (a daterange field)

If these fields are not present, the output will not work correctly.

## Typical implementation

There is no UI for this module, so you need to modify your templates to get it to output correctly. In a `node--ubc-event.html.twig` template, something like:

```
<ul class="dropdown-menu">
    <li>
        <a href="{{ content.google_cal_link }}" target="_blank" class="block px-1 py-2 no-underline hover--bg-grey-100">Google Calendar</a>
    </li>
    <li>
        <a href="{{ content.ical_link }}" class="block px-1 py-2 no-underline hover--bg-grey-100">iCal</a>
    </li>
    <li>
        <a href="{{ content.outlook_link }}" class="block px-1 py-2 no-underline hover--bg-grey-100">Outlook</a>
    </li>
</ul>
```

If the module is enabled but you don't want the fields to display, update the `{{ content }}` variable to use the `without` filter in your `node--ubc-event.html.twig` template. For example:

```
{{ content|without('field_some_other_field', 'google_cal_link', 'ical_link', 'outlook_link') }}
```
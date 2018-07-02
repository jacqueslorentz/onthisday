# Onthisday

> 📆 Javascript fetcher for Wikipedia "On this day" events.

## Getting Started

A script used to fetch events from wikipedia for a specific day (today by default).

## Usage

```
yarn start [-a|--all] [-h|--html] [-l||--lang <language>]
```

Options:
```
    --lang Wikipedia language to get (`en` or `fr` for now) 
    --all Used to get all wikipedia events
    --html When defined return the html value with links
```


In `./sources/aws.js` in an script example to deploy it on AWS.

[Here is a test API.](https://eh8jjia7j5.execute-api.eu-west-3.amazonaws.com/prod/events)

Possible query parameters:
- __lang__ Language to fetch (`en` or `fr` for now)
- __day__ Day for date to fetch (default is today)
- __month__ Month for date to fetch (default is today)
- __html__ Returns html content
- __all__ Returns all wikipedia's events

Do not flood the API, I will shut it down otherwise...

## Built With

- [cheerio](https://github.com/cheeriojs/cheerio) - Implementation of core jQuery for servers
- [request-promise](https://github.com/request/request-promise) - Simplified HTTP request client

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

Jacques Lorentz
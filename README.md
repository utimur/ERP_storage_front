# ERP Storage Front

## Development

1. Install dependencies:

        npm install

2. Run development environment.

- For Linux or macOS:

        REACT_APP_API_PREFIX='http://some_addr:some_port' npm start

- For Windows (cmd.exe):

        set "REACT_APP_API_PREFIX=http://some_addr:some_port" && npm start

- For Windows (Powershell):

        ($env:REACT_APP_API_PREFIX = "http://some_addr:some_port") -and (npm start)

## Code formatting

For code formatting simply run:

    npx standard --fix

**NOTE**: some issues would be printed verbosely. Please, fix them to keep code clean! 
# React todo-list

## Description

A simple todo-list built using React.
[Access it right here](https://frstf4ll.github.io/web-todo-react/).

### Features

- Add todos with a custom title, description and due date.

- Filter your todos by name, date or done status.

- Modify your todos description, title and date dynamically.

- ... Or delete them all in a heartbeat.
  - But of course, the app ask you before destroying everything.

### React component relationships

```mermaid
flowchart LR
    API[[API REST / PostgREST]] <--> FormStore[useFormStore]
    FilterStore[useFilterStore]

    FormStore -.-> Form[TodoForm]
    Form -.-> Inputs[Inputs & Buttons]

    FilterStore -.-> Filter[FilterContainer]

    App[App.tsx] --- MainMenu[MainMenuWrapper]
    App --- List[TodosContainer]

    MainMenu --> Form
    MainMenu --> Filter
    List --> Item[TodoWrapper]

    FormStore -.-> List
    FilterStore -.-> List

    style App fill:#f1f1f1,stroke:#333,stroke-width:2px
    style FilterStore fill:#f9f,stroke:#333
    style FormStore fill:#bbf,stroke:#333
    style API fill:#fff3e0,stroke:#ff6f00
    ```

## Setup

Install the dependencies:

```bash
pnpm install
````

## Get started

Start the dev server, and the app will be available at
[http://localhost:3000](http://localhost:3000).

```bash
pnpm run dev
```

Build the app for production:

```bash
pnpm run build
```

Preview the production build locally:

```bash
pnpm run preview
```

### Learn more

To learn more about Rsbuild, check out the following resources:

- [Rsbuild documentation](https://rsbuild.rs) - explore Rsbuild features and
  APIs.
- [Rsbuild GitHub repository](https://github.com/web-infra-dev/rsbuild) - your
  feedback and contributions are welcome!

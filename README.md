# react-pagination-search
`react-pagination-search` is a React library that provides a simple way to paginate and search through large amounts of data.

## Installation
```bash
npm install react-pagination-search
```

## Usage
To use `react-pagination-search`, you'll need to wrap your component in a `PaginationSearch` and set up the necessary state and callbacks:
```javascript
import PaginationSearch from 'react-pagination-search';

const data = [{id: 1, name: 'John'}, {id: 2, name: 'Doe'}, ...];

function MyComponent() {

  return (
    <PaginationSearch
        data={data}
        itemsPerPage={20}
    >
        <PaginationSearch.Searchbox />
        <PaginationSearch.Data
            render={(item) => {
                return (
                    <div>
                        {item.name}
                    </div>
                )
            }}
        />
        <PaginationSearch.Buttons />
    </PaginationSearch>
  );
}

export default MyComponent;
```

## Props
- `data`: An array of data to be paginated.
- `itemsPerPage`: The number of items to be displayed per page. Default: `10`.

## Sub-components
- `PaginationSearch.Searchbox`: A search input component that filters the paginated data. It takes the following props:
    - `placeholder`: A placeholder to be showed in the search bar, the default value is 
    - `showSearchButton`: A boolean that indicates  whether the search button is displayed. Even if is displayed, you can still search by typing `enter` in the searchbar.
    - `searchButton`: A custom component to be the search button. It already has the `value`, `onChange` and `onKeyDown` props.
    - `searchInput`: A custom component to be the search input. It already has an `onclick` prop.
- `PaginationSearch.Buttons`: A component that displays pagination buttons.
- `PaginationSearch.Data`: This component renders the data for the current page. It takes the following props:
    - `render`: A function that takes an item from the data array and returns a React component to render that item.

# Contributing
Thank you for considering contributing to `react-pagination-search`! We welcome any contributions, whether they be bug fixes, feature requests, documentation improvements, or anything in between.

To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your contribution.
3. Make your changes and commit them, with descriptive commit messages.
4. Push your branch to your forked repository.
5. Open a pull request with a clear title and description of your changes.

We appreciate your contributions and hope to work with you soon!
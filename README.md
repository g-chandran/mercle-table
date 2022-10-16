# Mercle Table
This project is a part of Mercle's coding assignment from a Figma file.

The application includes functional Pagination and Search features from the given Figma prototype.

## Tech Stack
Note: This project uses `vite` against popular `create-react-app` & `webpack` in favour of better performance, advanced code splitting and awesome DX.

- UI Library: React
- Styling: Plain CSS
- Package Manager: pnpm
- Module Bundler: vite
- Language: TypeScript
- Icon Library: react-icons

### Mockdata
Mockdata is generated using [Mockaroo](https://www.mockaroo.com/) with minor shuffling in parts.

## Installation and usage
1. Clone the project to local
2. `cd` into project folder
3. `pnpm i` to install the dependencies (`npm i -g pnpm` to install pnpm for the first time)
4. `pnpm dev` to start the dev server
5. Access the running application at `localhost:5173`

## Assumptions
### Text Truncating
`DWE ID` (Discord / Wallet / Email ID), `NFT`, `NFT Description` columns have text truncating with appropriate character length.

Full text content of the truncated texts can be seen on the HTML tooltip when hovering over it.

### Responsiveness
Since skewing the table doesn't provide good results, a minimum width of `80rem` is given to the table for better viewing.

### Summarized Attributes
Based on the Figma prototype, Attributes of length more than 2 are grouped with Comma separated values and shown on the tooltip.

### Tooltip
The tooltip is given only to Attributes section based on the Figma prototype.

### Date Claimed
The content of the Date claimed column are right aligned due to its numeric content. (Best practices)


## Features
### Fully functional
The search box, pagination, per page row selection are all functional and working well.

### Best practices
Best practices such as text titles, disabling wherever required, proportional column width are followed.

### Typescript
Built with Typescript along with strong Type safety for moving parts.

## Technical decisions
### Vite
Vite provides extra-ordinary Developer experience with HMR and superb performance with Native module bundling and code splitting.

### TypeScript
Since the application holds lot of moving parts, using TypeScript provides bug-free codebase.

### PNPM
pnpm uses `symlink` to reduce the weightage to `node_modules` folder by reusing the packages installed into `pnpm`  root.

Thus, installing new packages uses less bandwidth, less storage and very less time.
export interface Filter {
    bodies: Array<string>,
    agency: Array<string>,
    location: Array<string>,
    launchsystem: Array<string>,
    outcome: Array<string>
}

export interface Mission {
    missionname: String,
    location: String,
    years: {
        longValues: Array<number>
    },
    bodies: {
        stringValues: Array<string>
    },
    description: String,
    agency: String,
    image: String,
    trajectory: String
}

export interface Mission {
    missionname: String,
    location: String,
    years: {
        longValues: Array<number>
    },
    bodies: {
        stringValues: Array<string>
    },
    description: String,
    agency: String,
    image: String,
    trajectory: String
}

export interface Info {
    agencies: Array<string>,
    launchsite: Array<string>,
    launchsystem: Array<string>,
    outcomes: Array<string>,
    bodies: Array<string>
  }

export interface Missions extends Array<Mission>{}

// export interface View {
//     view: String
//   }

export interface OptionsProps {
    view: String,
    info: Info,
    filters: Filter,
    changeFilters: (event: any) => void;
}
export interface Filter {
    bodies: Array<string>;
    agency: Array<string>;
    location: Array<string>;
    launchsystem: Array<string>;
    outcome: Array<string>
}

export interface Mission {
    missionname: String;
    location: String;
    years: {
        longValues: Array<number>
    };
    bodies: {
        stringValues: Array<string>
    };
    description: String;
    agency: String;
    image: String;
    trajectory: String
}

export interface Agency {
    agencyid: Number;
    agency: string
}

export interface LaunchSite {
    launchlocationid: Number;
    location: string
}

export interface LaunchSystem {
    launchsystemid: Number;
    launchsystem: string
}

export interface Outcome {
    outcomeid: Number;
    outcome: string
}

export interface Info {
    agencies: Agency[];
    launchsite: LaunchSite[];
    launchsystem: LaunchSystem[];
    outcomes: Outcome[];
    bodies: Array<string>
  }


export interface Missions extends Array<Object>{}

export interface OptionsProps {
    view: String;
    info: Info;
    filters: Filter;
    changeFilters: (event: any) => void;
}

export interface CardProps {
    mission: Mission;
    missions: Missions;
    getMission: any
}

export interface FiltersProps {
    setView: (arg: String) => void;
}
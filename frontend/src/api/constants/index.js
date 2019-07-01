export const API_INTERACTION_START = "API_INTERACTION_START";
export const API_INTERACTION_END = "API_INTERACTION_END";

/* Constants were batch-created with the following code:

    let wrap = x => x.map(y => `export const ${y} = "${y}";`);
    console.log(
        [
            ("session",
            "instructor",
            "position",
            "assignment",
            "offer",
            "position_template",
            "application",
            "wage_chunk")
        ]
            .map(x => {
                x = x.toUpperCase();
                return [`// \`${x.toLowerCase()}\`-related constants`]
                    .concat(
                        wrap([
                            `FETCH_${x}S_SUCCESS`,
                            `FETCH_ONE_${x}_SUCCESS`,
                            `UPSERT_ONE_${x}_SUCCESS`,
                            `DELETE_ONE_${x}_SUCCESS`
                        ])
                    )
                    .join("\n");
            })
            .join("\n\n")
    );
*/

// `session`-related constants
export const FETCH_SESSIONS_SUCCESS = "FETCH_SESSIONS_SUCCESS";
export const FETCH_ONE_SESSION_SUCCESS = "FETCH_ONE_SESSION_SUCCESS";
export const UPSERT_ONE_SESSION_SUCCESS = "UPSERT_ONE_SESSION_SUCCESS";
export const DELETE_ONE_SESSION_SUCCESS = "DELETE_ONE_SESSION_SUCCESS";
export const SET_ACTIVE_SESSION = "SET_ACTIVE_SESSION";

// `instructor`-related constants
export const FETCH_INSTRUCTORS_SUCCESS = "FETCH_INSTRUCTORS_SUCCESS";
export const FETCH_ONE_INSTRUCTOR_SUCCESS = "FETCH_ONE_INSTRUCTOR_SUCCESS";
export const UPSERT_ONE_INSTRUCTOR_SUCCESS = "UPSERT_ONE_INSTRUCTOR_SUCCESS";
export const DELETE_ONE_INSTRUCTOR_SUCCESS = "DELETE_ONE_INSTRUCTOR_SUCCESS";

// `position`-related constants
export const FETCH_POSITIONS_SUCCESS = "FETCH_POSITIONS_SUCCESS";
export const FETCH_ONE_POSITION_SUCCESS = "FETCH_ONE_POSITION_SUCCESS";
export const UPSERT_ONE_POSITION_SUCCESS = "UPSERT_ONE_POSITION_SUCCESS";
export const DELETE_ONE_POSITION_SUCCESS = "DELETE_ONE_POSITION_SUCCESS";

// `assignment`-related constants
export const FETCH_ASSIGNMENTS_SUCCESS = "FETCH_ASSIGNMENTS_SUCCESS";
export const FETCH_ONE_ASSIGNMENT_SUCCESS = "FETCH_ONE_ASSIGNMENT_SUCCESS";
export const UPSERT_ONE_ASSIGNMENT_SUCCESS = "UPSERT_ONE_ASSIGNMENT_SUCCESS";
export const DELETE_ONE_ASSIGNMENT_SUCCESS = "DELETE_ONE_ASSIGNMENT_SUCCESS";

// `offer`-related constants
export const FETCH_OFFERS_SUCCESS = "FETCH_OFFERS_SUCCESS";
export const FETCH_ONE_OFFER_SUCCESS = "FETCH_ONE_OFFER_SUCCESS";
export const UPSERT_ONE_OFFER_SUCCESS = "UPSERT_ONE_OFFER_SUCCESS";
export const DELETE_ONE_OFFER_SUCCESS = "DELETE_ONE_OFFER_SUCCESS";

// `position_template`-related constants
export const FETCH_POSITION_TEMPLATES_SUCCESS =
    "FETCH_POSITION_TEMPLATES_SUCCESS";
export const FETCH_ONE_POSITION_TEMPLATE_SUCCESS =
    "FETCH_ONE_POSITION_TEMPLATE_SUCCESS";
export const UPSERT_ONE_POSITION_TEMPLATE_SUCCESS =
    "UPSERT_ONE_POSITION_TEMPLATE_SUCCESS";
export const DELETE_ONE_POSITION_TEMPLATE_SUCCESS =
    "DELETE_ONE_POSITION_TEMPLATE_SUCCESS";

// `application`-related constants
export const FETCH_APPLICATIONS_SUCCESS = "FETCH_APPLICATIONS_SUCCESS";
export const FETCH_ONE_APPLICATION_SUCCESS = "FETCH_ONE_APPLICATION_SUCCESS";
export const UPSERT_ONE_APPLICATION_SUCCESS = "UPSERT_ONE_APPLICATION_SUCCESS";
export const DELETE_ONE_APPLICATION_SUCCESS = "DELETE_ONE_APPLICATION_SUCCESS";

// `wage_chunk`-related constants
export const FETCH_WAGE_CHUNKS_SUCCESS = "FETCH_WAGE_CHUNKS_SUCCESS";
export const FETCH_ONE_WAGE_CHUNK_SUCCESS = "FETCH_ONE_WAGE_CHUNK_SUCCESS";
export const UPSERT_ONE_WAGE_CHUNK_SUCCESS = "UPSERT_ONE_WAGE_CHUNK_SUCCESS";
export const DELETE_ONE_WAGE_CHUNK_SUCCESS = "DELETE_ONE_WAGE_CHUNK_SUCCESS";

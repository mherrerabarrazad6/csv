import { readCSVPackage } from "./readCSV";
import * as management from 'contentful-management'


const contentfulManagememt = management.createClient({
    //this is optional here, should be only here if you know the specific space to use
    space: "rfh1327471ch",
    //the access token should be different.
    accessToken: "GSoMrRGnvMqAMSvj0DzJZp8voHOBl8Ip4byWXoqS3D0"
});
async function start() {
    //The information from CSV
    const csv = await readCSVPackage();
    csv.forEach(async (row) => {
        // destructuring the row
        const { id, location_id, old_location_id, facility, new_facility_long_name, new_legal_name, folder_location, address, city_state_zip, office_number, ppc_phone, cell_number, fax_number, new_customer_number, email, description, directions, state_name, short_facility_name, page_description, about_text, custom_section_one_title, custom_section_one_content, has_custom_section_two, custom_section_two_title, custom_section_two_content, has_custom_section_three, custom_section_three_title, custom_section_three_content, has_custom_section_four, custom_section_four_title, custom_section_four_content, has_custom_section_directions, custom_section_directions_title, custom_section_directions_content, has_youtube_section, youtube_section_content } = row;
        /**
         * Get the space, then the environment, then create the entry
         */

        const SPACE_ID = "rfh1327471ch";
        const ENVIRONMENT_ID = "development"; // I think this is correct
        const CONTENT_TYPE_ID = "location"; //but not sure about this one

        contentfulManagememt.getSpace(SPACE_ID)
            .then((space) => space.getEnvironment(ENVIRONMENT_ID))
            .then((environment) => environment.createEntry(CONTENT_TYPE_ID, {
                fields: {
                    id: id,
                    location_id: location_id,
                    old_location_id: old_location_id,
                    facility: facility,
                    new_facility_long_name: new_facility_long_name,
                    new_legal_name: new_legal_name,
                    folder_location: folder_location,
                    address: address,
                    city_state_zip: city_state_zip,
                    office_number: office_number,
                    ppc_phone: ppc_phone,
                    cell_number: cell_number,
                    fax_number: fax_number,
                    new_customer_number: new_customer_number,
                    email: email,
                    description: description,
                    directions: directions,
                    state_name: state_name,
                    short_facility_name: short_facility_name,
                    page_description: page_description,
                    about_text: about_text,
                    custom_section_one_title: custom_section_one_title,
                    custom_section_one_content: custom_section_one_content,
                    has_custom_section_two: has_custom_section_two,
                    custom_section_two_title: custom_section_two_title,
                    custom_section_two_content: custom_section_two_content,
                    has_custom_section_three: has_custom_section_three,
                    custom_section_three_title: custom_section_three_title,
                    custom_section_three_content: custom_section_three_content,
                    has_custom_section_four: has_custom_section_four,
                    custom_section_four_title: custom_section_four_title,
                    custom_section_four_content: custom_section_four_content,
                    has_custom_section_directions: has_custom_section_directions,
                    custom_section_directions_title: custom_section_directions_title,
                    custom_section_directions_content: custom_section_directions_content,
                    has_youtube_section: has_youtube_section,
                    youtube_section_content: youtube_section_content
                }
            }))
            //publish the entry
            .then((entry) => entry.publish())
            // .then((entry) => console.log(entry))
            .catch(console.error)
    })
}
// uncomment this to run the script
// start()
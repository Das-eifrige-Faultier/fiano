function combo_extrude_10_outline_fn(){
    return new CSG.Path2D([[378.9862518,-145.3620911],[435.1492875,-159.40285]]).appendArc([456.4438438,-128.6158004],{"radius":20,"clockwise":false,"large":false}).appendPoint([411.4438438,-63.6158004]).appendArc([391.4222912,-55.3226018],{"radius":20,"clockwise":false,"large":false}).appendPoint([336.4222912,-65.3226018]).appendArc([320,-85],{"radius":20,"clockwise":false,"large":false}).appendPoint([320,-102.9490947]).appendArc([313.8492997,-117.3781244],{"radius":20,"clockwise":true,"large":false}).appendPoint([270.7255989,-158.7691982]).appendArc([266.5316236,-181.8261038],{"radius":20,"clockwise":false,"large":false}).appendPoint([276.9567253,-203.6278756]).appendArc([310.1137817,-208.0986108],{"radius":20,"clockwise":false,"large":false}).appendPoint([359.0217575,-151.666331]).appendArc([378.9862518,-145.3620911],{"radius":20,"clockwise":true,"large":false}).close().innerToCAG()
.union(
    new CSG.Path2D([[111.0137482,-145.3620911],[54.8507125,-159.40285]]).appendArc([33.5561562,-128.6158004],{"radius":20,"clockwise":true,"large":false}).appendPoint([78.5561562,-63.6158004]).appendArc([98.5777088,-55.3226018],{"radius":20,"clockwise":true,"large":false}).appendPoint([153.5777088,-65.3226018]).appendArc([170,-85],{"radius":20,"clockwise":true,"large":false}).appendPoint([170,-102.9490947]).appendArc([176.1507003,-117.3781244],{"radius":20,"clockwise":false,"large":false}).appendPoint([219.2744011,-158.7691982]).appendArc([223.4683764,-181.8261038],{"radius":20,"clockwise":true,"large":false}).appendPoint([213.0432747,-203.6278756]).appendArc([179.8862183,-208.0986108],{"radius":20,"clockwise":true,"large":false}).appendPoint([130.9782425,-151.666331]).appendArc([111.0137482,-145.3620911],{"radius":20,"clockwise":false,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 10] });
}




                function standard_case_wood_case_fn() {
                    

                // creating part 0 of case standard_case_wood
                let standard_case_wood__part_0 = combo_extrude_10_outline_fn();

                // make sure that rotations are relative
                let standard_case_wood__part_0_bounds = standard_case_wood__part_0.getBounds();
                let standard_case_wood__part_0_x = standard_case_wood__part_0_bounds[0].x + (standard_case_wood__part_0_bounds[1].x - standard_case_wood__part_0_bounds[0].x) / 2
                let standard_case_wood__part_0_y = standard_case_wood__part_0_bounds[0].y + (standard_case_wood__part_0_bounds[1].y - standard_case_wood__part_0_bounds[0].y) / 2
                standard_case_wood__part_0 = translate([-standard_case_wood__part_0_x, -standard_case_wood__part_0_y, 0], standard_case_wood__part_0);
                standard_case_wood__part_0 = rotate([0,0,0], standard_case_wood__part_0);
                standard_case_wood__part_0 = translate([standard_case_wood__part_0_x, standard_case_wood__part_0_y, 0], standard_case_wood__part_0);

                standard_case_wood__part_0 = translate([0,0,0], standard_case_wood__part_0);
                let result = standard_case_wood__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return standard_case_wood_case_fn();
            }

        
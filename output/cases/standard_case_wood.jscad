function left_extrude_10_outline_fn(){
    return new CSG.Path2D([[191.3862175,-116.9435666],[96.4222912,-99.6773982]]).appendArc([84.520854,-67.3352442],{"radius":20,"clockwise":true,"large":false}).appendPoint([129.520854,-12.3352442]).appendArc([148.5777088,-5.3226018],{"radius":20,"clockwise":true,"large":false}).appendPoint([203.5777088,-15.3226018]).appendArc([220,-35],{"radius":20,"clockwise":true,"large":false}).appendPoint([220,-52.9490947]).appendArc([226.1507003,-67.3781244],{"radius":20,"clockwise":false,"large":false}).appendPoint([269.2744011,-108.7691982]).appendArc([273.4683764,-131.8261038],{"radius":20,"clockwise":true,"large":false}).appendPoint([263.0432747,-153.6278756]).appendArc([229.2129557,-157.2788123],{"radius":20,"clockwise":true,"large":false}).appendPoint([203.5955538,-124.3421527]).appendArc([191.3862176,-116.9435667],{"radius":20,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 10] });
}




                function standard_case_wood_case_fn() {
                    

                // creating part 0 of case standard_case_wood
                let standard_case_wood__part_0 = left_extrude_10_outline_fn();

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

        
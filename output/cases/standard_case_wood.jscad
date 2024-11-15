function left_extrude_10_outline_fn(){
    return new CSG.Path2D([[91.3862175,-16.9435666],[-3.5777088,0.3226018]]).appendArc([-15.479146,32.6647558],{"radius":20,"clockwise":true,"large":false}).appendPoint([29.520854,87.6647558]).appendArc([48.5777088,94.6773982],{"radius":20,"clockwise":true,"large":false}).appendPoint([103.5777088,84.6773982]).appendArc([120,65],{"radius":20,"clockwise":true,"large":false}).appendPoint([120,47.0509053]).appendArc([126.1507003,32.6218756],{"radius":20,"clockwise":false,"large":false}).appendPoint([169.2744011,-8.7691982]).appendArc([173.4683764,-31.8261038],{"radius":20,"clockwise":true,"large":false}).appendPoint([163.0432747,-53.6278756]).appendArc([129.2129557,-57.2788123],{"radius":20,"clockwise":true,"large":false}).appendPoint([103.5955538,-24.3421527]).appendArc([91.3862176,-16.9435667],{"radius":20,"clockwise":false,"large":false}).close().innerToCAG()
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

        
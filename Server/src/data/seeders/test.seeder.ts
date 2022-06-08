// import { BaseRepository } from '../../repositories/Implementations/Base.repository';
// import { PanelService } from '../../services/Implementations/Panel.service';
// import { PanelDto } from '../../services/Dtos';
// import { runMapper } from '../../utilities/mapper';

// export default class CreateUsers implements Seeder {
//   public async run(factory: Factory, connection: Connection): Promise<any> {
//     runMapper();
//     let panelDto = new PanelDto();
//     panelDto.Id = "5";
//     panelDto.Name = "Panel 5";
//     panelDto.Disabled = false;
//     let panelService = new PanelService();
//     let resPanelDto = await panelService.add(panelDto);
//     console.log("=======resPanelDto=====")
//     console.log(resPanelDto)
//     console.log("=======resPanelDto=====")

//     return;
//   }
// }
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateContentTypeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_content_type_dto_1 = require("./create-content-type.dto");
class UpdateContentTypeDto extends (0, swagger_1.PartialType)(create_content_type_dto_1.CreateContentTypeDto) {
}
exports.UpdateContentTypeDto = UpdateContentTypeDto;
//# sourceMappingURL=update-content-type.dto.js.map